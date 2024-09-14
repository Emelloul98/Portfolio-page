function homePage()
{
    addProject("Python Projects","Advanced Machine Learning projects involving algorithm comparison and classification using: Logistic Regression, Decision Trees, K-Means, GMM, K-Fold Cross-Validation, Bagging, and AdaBoost.",pythonButtonClick);
    addProject("C projects", "Advanced Machine Learning projects involving algorithm comparison and classification using: Logistic Regression, Decision Trees, K-Means, GMM, K-Fold Cross-Validation, Bagging, and AdaBoost.",cButtonClick);
    addProject("Full-Stack projects", "Advanced Machine Learning projects involving algorithm comparison and classification using: Logistic Regression, Decision Trees, K-Means, GMM, K-Fold Cross-Validation, Bagging, and AdaBoost.",fullStackButtonClick);
    
}
function addProject(title, description, func) {
    const projects_div = document.getElementsByClassName("projects-content")[0];
    const new_project_btn = document.createElement("Button");
    new_project_btn.className = "project";
    new_project_btn.addEventListener("click", func);

    const project_title = document.createElement("h3");
    project_title.textContent = title;
    
    const project_description = document.createElement("p");
    project_description.textContent = description;
    
    new_project_btn.appendChild(project_title);
    new_project_btn.appendChild(project_description);

    projects_div.appendChild(new_project_btn);
}

function pythonButtonClick() {
    const project_div = document.getElementsByClassName("current-project")[0];
    const new_div = document.createElement("div");  // Create a new div to hold all elements

    // Create and append project title
    const project_title = document.createElement("h2");
    project_title.textContent = "Title: Unsupervised Learning on a Digits Dataset";
    new_div.appendChild(project_title);  // Append the title to the new div

    // Create and append project description
    const project_description = document.createElement("p");
    project_description.textContent = "Description: In this project, I applied unsupervised learning techniques on the digits dataset from sklearn. The dataset contains 64-dimensional data representing hand-written digits. My objective was to cluster the data into three distinct groups.";
    project_description.className = "project-description";
    new_div.appendChild(project_description);  // Append the description to the new div

    // Create and append K-Means description
    const k_means_div = document.createElement("p");
    k_means_div.textContent = "K-Means Clustering: I started by running the K-Means algorithm, experimenting with different values of k ranging from 1 to 10, and compared the results using the elbow method. I also visualized the clusters in two dimensions using PCA and t-SNE. After verifying the clusters, I evaluated the centroid accuracy and explored whether the true digit labels matched the cluster assignments.";
    k_means_div.className = "k-means-description";
    new_div.appendChild(k_means_div);  // Append the K-Means description to the new div

    // Create and append GMM description
    const gmm_div = document.createElement("p");
    gmm_div.textContent = "Gaussian Mixture Model (GMM): I proceeded by implementing the GMM algorithm and compared the clustering results against K-Means. I adjusted the parameters for convergence and ensured the clusters had a Gaussian distribution. Similar to K-Means, I visualized the clusters and analyzed the cluster assignments to determine if they aligned with the actual digit labels.";
    gmm_div.className = "gmm-description";
    new_div.appendChild(gmm_div);  // Append the GMM description to the new div

    // Finally, append the new div to the project_div
    project_div.appendChild(new_div);
}


function cButtonClick()
{

}

function fullStackButtonClick()
{

}
