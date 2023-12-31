// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract UsersContract {
    struct Client {
        string yourName;
        string CompanyName;
        string description;
        string email;
        address walletAddress;
        bool deleted;
    }

    struct Freelancer {
        string name;
        string email;
        address walletAddress;
        string category;
        string experience;
        string skills;
        bool deleted;
    }

    struct Job {
        address clientId;
        string title;
        string location;
        string category;
        uint payInCELO;
        string experience;
        string description;
        address[] freelancerRequests;
        address freelancerId;
        bool completed;
        uint256 createdAt;
    }

    mapping(address => Client) public clients;
    mapping(address => Freelancer) public freelancers;
    mapping(uint256 => Job) public jobs;
    uint256 public jobCounter;

    event JobPosted(uint256 indexed jobId, address indexed clientId);
    event JobRequested(uint256 indexed jobId, address indexed freelancerId);
    event JobAccepted(uint256 indexed jobId, address indexed clientId, address indexed freelancerId);
    event JobCompleted(uint256 indexed jobId, address indexed clientId, address indexed freelancerId);
    event CEL0Transferred(address indexed freelancerId, uint amount);
    event JobDeleted(uint256 indexed jobId, address indexed clientId);

    modifier onlyClient(uint256 jobId) {
        require(jobs[jobId].clientId == msg.sender, "Only the client can perform this operation");
        _;
    }

    function addOrUpdateClientData(
        string memory yourName,
        string memory CompanyName,
        string memory description,
        string memory email,
        address walletAddress
    ) public {
        clients[walletAddress] = Client(yourName, CompanyName, description, email, walletAddress, false);
    }

    function markClientDataAsDeleted(address walletAddress) public {
        clients[walletAddress].deleted = true;
    }

    function getClientData(address walletAddress) public view returns (Client memory) {
        return clients[walletAddress];
    }

    function addOrUpdateFreelancerData(
        string memory name,
        string memory email,
        string memory category,
        string memory experience,
        string memory skills,
        address walletAddress
    ) public {
        freelancers[walletAddress] = Freelancer(name, email, walletAddress, category, experience, skills, false);
    }

    function markFreelancerDataAsDeleted(address walletAddress) public {
        freelancers[walletAddress].deleted = true;
    }

    function getFreelancerData(address walletAddress) public view returns (Freelancer memory) {
        return freelancers[walletAddress];
    }

    function userExists(address walletAddress) public view returns (bool, string memory) {
        if (clients[walletAddress].walletAddress == walletAddress) {
            return (true, "Client");
        } else if (freelancers[walletAddress].walletAddress == walletAddress) {
            return (true, "Freelancer");
        } else {
            return (false, "None");
        }
    }

    function postJob(
        string memory title,
        string memory location,
        string memory category,
        uint payInCELO,
        string memory experience,
        string memory description
    ) public payable returns (uint256 jobId) {
        require(msg.value == payInCELO, "Please transfer the correct amount of CELO.");

        jobId = jobCounter++;
        jobs[jobId] = Job(
            msg.sender,
            title,
            location,
            category,
            payInCELO,
            experience,
            description,
            new address[](0),
            address(0),
            false,
            block.timestamp
        );

        emit JobPosted(jobId, msg.sender);
    }

    function requestJob(uint256 jobId) public {
        Job storage job = jobs[jobId];
        require(!job.completed, "Job already completed");
        require(job.freelancerRequests.length < 10, "Maximum requests reached for this job");
        job.freelancerRequests.push(msg.sender);

        emit JobRequested(jobId, msg.sender);
    }

    function acceptJobRequest(uint256 jobId, address freelancerToAccept) public {
        Job storage job = jobs[jobId];
        require(job.clientId == msg.sender, "Only the client can accept a job request");
        require(!job.completed, "Job already completed");
        require(job.freelancerRequests.length > 0, "No requests to accept");
        bool found = false;

        for (uint i = 0; i < job.freelancerRequests.length; i++) {
            if (job.freelancerRequests[i] == freelancerToAccept) {
                found = true;
                break;
            }
        }

        require(found, "Freelancer not in the request list");

        job.freelancerId = freelancerToAccept;
        job.freelancerRequests = new address[](0);

        emit JobAccepted(jobId, msg.sender, freelancerToAccept);
    }

    function completeJob(uint256 jobId) public {
        Job storage job = jobs[jobId];
        require(job.clientId == msg.sender, "Only the client can mark the job as completed");
        require(!job.completed, "Job already completed");
        address freelancerId = job.freelancerId;

        require(freelancerId != address(0), "No freelancer assigned to the job");

        uint payInCELO = job.payInCELO;

        (bool success, ) = payable(freelancerId).call{value: payInCELO}("");
        require(success, "CELO transfer failed");

        job.completed = true;

        emit JobCompleted(jobId, msg.sender, freelancerId);
        emit CEL0Transferred(freelancerId, payInCELO);
    }

    function deleteJob(uint256 jobId) public onlyClient(jobId) {
        Job storage job = jobs[jobId];
        require(!job.completed, "Cannot delete a completed job");

        if (job.payInCELO > 0) {
            // Transfer remaining CELO back to the client
            (bool success, ) = payable(msg.sender).call{value: job.payInCELO}("");
            require(success, "CELO transfer to client failed");
        }

        delete jobs[jobId];

        emit JobDeleted(jobId, msg.sender);
    }

    function getAllJobs() public view returns (Job[] memory) {
        Job[] memory allJobs = new Job[](jobCounter);

        for (uint256 i = 0; i < jobCounter; i++) {
            Job storage job = jobs[i];
            allJobs[i] = job;
        }

        return allJobs;
    }

    function getJobById(uint256 jobId) public view returns (Job memory) {
        require(jobId < jobCounter, "Job ID does not exist");

        Job storage job = jobs[jobId];
        return job;
    }

    function getFreelancerRequestedJobs(address freelancerWallet) public view returns (Job[] memory) {
        uint256 requestedJobsCount = 0;

        for (uint256 i = 0; i < jobCounter; i++) {
            Job storage job = jobs[i];

            for (uint256 j = 0; j < job.freelancerRequests.length; j++) {
                if (job.freelancerRequests[j] == freelancerWallet) {
                    requestedJobsCount++;
                    break;
                }
            }
        }

        Job[] memory requestedJobs = new Job[](requestedJobsCount);
        uint256 index = 0;

        for (uint256 i = 0; i < jobCounter; i++) {
            Job storage job = jobs[i];

            for (uint256 j = 0; j < job.freelancerRequests.length; j++) {
                if (job.freelancerRequests[j] == freelancerWallet) {
                    requestedJobs[index++] = job;
                    break;
                }
            }
        }

        return requestedJobs;
    }

    function getFreelancerAcceptedJobs(address freelancerWallet) public view returns (Job[] memory) {
        uint256 acceptedJobsCount = 0;

        for (uint256 i = 0; i < jobCounter; i++) {
            Job storage job = jobs[i];

            if (job.freelancerId == freelancerWallet && job.completed) {
                acceptedJobsCount++;
            }
        }

        Job[] memory acceptedJobs = new Job[](acceptedJobsCount);
        uint256 index = 0;

        for (uint256 i = 0; i < jobCounter; i++) {
            Job storage job = jobs[i];

            if (job.freelancerId == freelancerWallet && job.completed) {
                acceptedJobs[index++] = job;
            }
        }

        return acceptedJobs;
    }
}
