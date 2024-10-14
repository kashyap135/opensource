// co-admin.js

// Load requests from localStorage
function loadRequests() {
    const requests = JSON.parse(localStorage.getItem("studentRequests")) || [];
    document.getElementById("requestList").innerHTML = ""; // Clear the list before loading
    requests.forEach(addRequestToList);
}

// Add a request to the request list
function addRequestToList(request) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = `${request.subject} - ${request.details} | Status: ${request.status || 'Pending'}`;

    // Approve button
    const approveBtn = document.createElement("button");
    approveBtn.className = "btn btn-success btn-sm ms-2";
    approveBtn.textContent = "Approve";
    approveBtn.onclick = function () {
        approveRequest(request);
    };

    // Reject button
    const rejectBtn = document.createElement("button");
    rejectBtn.className = "btn btn-danger btn-sm ms-2";
    rejectBtn.textContent = "Reject";
    rejectBtn.onclick = function () {
        rejectRequest(request);
    };

    li.appendChild(approveBtn);
    li.appendChild(rejectBtn);
    document.getElementById("requestList").appendChild(li);
}

// Approve a request
function approveRequest(request) {
    request.status = "Approved";
    updateRequestList();
    alert(`Request for ${request.subject} approved!`);
}

// Reject a request
function rejectRequest(request) {
    request.status = "Rejected";
    updateRequestList();
    alert(`Request for ${request.subject} rejected!`);
}

// Update the request list in localStorage and refresh the display
function updateRequestList() {
    const requests = JSON.parse(localStorage.getItem("studentRequests")) || [];
    localStorage.setItem("studentRequests", JSON.stringify(requests)); // Update local storage
    loadRequests(); // Refresh the display
}

// Load requests on page load
loadRequests();
