function homePage()
{
    addSubject("Python Projects","Advanced Machine Learning projects involving algorithm comparison and classification using: Logistic Regression, Decision Trees, K-Means, GMM, K-Fold Cross-Validation, Bagging, and AdaBoost.",pythonButtonClick);
    addSubject("C projects", "Advanced Machine Learning projects involving algorithm comparison and classification using: Logistic Regression, Decision Trees, K-Means, GMM, K-Fold Cross-Validation, Bagging, and AdaBoost.",cButtonClick);
    addSubject("Full-Stack projects", "Advanced Machine Learning projects involving algorithm comparison and classification using: Logistic Regression, Decision Trees, K-Means, GMM, K-Fold Cross-Validation, Bagging, and AdaBoost.",fullStackButtonClick);
    
}
function addSubject(title, description, func) {
    const subject_div = document.getElementsByClassName("subject-content")[0];
    const new_subject_btn = document.createElement("Button");
    new_subject_btn.className = "project";
    new_subject_btn.addEventListener("click", func);

    const subject_title = document.createElement("h3");
    subject_title.textContent = title;
    
    const project_description = document.createElement("p");
    project_description.textContent = description;
    
    new_subject_btn.appendChild(subject_title);
    new_subject_btn.appendChild(project_description);

    subject_div.appendChild(new_subject_btn);
}

function pythonButtonClick() {
    title="Unsupervised Learning on a Digits Dataset";
    description="In this project, I applied unsupervised learning techniques on the digits dataset from sklearn, which contains 64-dimensional data representing hand-written digits. My objective was to cluster the data into three distinct groups using Gaussian Mixture Model (GMM) and KMeans algorithms. These clustering methods were applied to identify patterns and group the data without any prior labels. I evaluated the performance of both algorithms using metrics such as silhouette score, inertia, and Bayesian Information Criterion (BIC), while visualizing the resulting clusters to gain deeper insights into the structure of the data. Additionally, I explored how dimensionality reduction techniques, such as PCA, could enhance clustering results and make visual interpretation more accessible.";
    images=["../images/python1/realData.png","../images/python1/elbowFunction.png","","../images/python1/kmean-vs-GMM.png"];
    link="https://github.com/Emelloul98/Clustering-with-GMM-and-KMeans"
    pca="Principal Component Analysis (PCA): I started by applying PCA to reduce the dimensionality of the data from 64 to 2 dimensions, allowing me to visualize the data in a two-dimensional space. This transformation helped me understand the underlying structure of the data and identify patterns that could be used for clustering.";
    elbow="Elbow Method: I used the elbow method to determine the optimal number of clusters for the K-Means algorithm. By plotting the inertia values for different values of k, I identified the point where the rate of decrease in inertia slows down, indicating the optimal number of clusters.";
    kmeans="K-Means Clustering: I experimented with various values of k, ranging from 1 to 10, and used the elbow method to find the optimal number of clusters. After selecting the best k, I evaluated the performance by comparing the cluster assignments with the true digit labels provided in the dataset using the sklearn library. This analysis allowed me to assess how well the K-Means algorithm grouped similar data points and whether the cluster assignments corresponded to the actual labels.";
    gmm="Gaussian Mixture Model (GMM): I proceeded by implementing the GMM algorithm and compared the clustering results against K-Means. I adjusted the parameters for convergence and ensured the clusters had a Gaussian distribution. Similar to K-Means, I visualized the clusters and analyzed the cluster assignments to determine if they aligned with the actual digit labels."; 
    texts=[pca,elbow,kmeans,gmm];
    add_project(title,description,images,link,texts);
}


function cButtonClick()
{
    create_current_project_div();
}

function fullStackButtonClick()
{
    create_current_project_div();
}

function add_project(proj_title,proj_description,proj_images,proj_link,proj_texts)
{
    // document.getElementsByClassName("project-details")[0].innerHTML = "";
    create_current_project_div();
    const project_div = document.getElementsByClassName("current-project")[0];
    const new_div = document.createElement("div");  // Create a new div to hold all elements

    // Create and append project title
    const project_title = document.createElement("h2");
    project_title.textContent = proj_title;
    new_div.appendChild(project_title);  

    // Create and append project description
    const project_description = document.createElement("p");
    project_description.textContent = proj_description;
    project_description.className = "project-description";
    new_div.appendChild(project_description); 
    
    // Alternate between paragraphs and images
    const max_length = Math.max(proj_images.length, proj_texts.length);
    for(let i=0; i<max_length; i++)
    {
        if(i<proj_texts.length)
        {
            const text_div = document.createElement("p");
            text_div.textContent = proj_texts[i];
            new_div.appendChild(text_div);
        }
        if(i<proj_images.length)
        {
            if(proj_images[i] === "") continue;
            const image = document.createElement("img");
            image.src = proj_images[i];
            new_div.appendChild(image);
        }
    }

    // Create and append project link
    const project_link = document.createElement("a");
    project_link.textContent = "View Project code";
    project_link.href = proj_link;
    project_link.target = "_blank";
    new_div.appendChild(project_link);    

    // Finally, append the new div to the project_div
    project_div.appendChild(new_div);
}

function create_current_project_div()
{
    const project_div = document.getElementsByClassName("project-details")[0];
    project_div.innerHTML = "";
    const new_div = document.createElement("div");
    new_div.className = "current-project ";
    project_div.appendChild(new_div);
}