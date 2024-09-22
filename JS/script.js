const isGitHubPages = window.location.hostname === 'emelloul98.github.io';
function loadHome(){
    add_selected_css_to_page("Home");
    /* Check if the home page is already open */
    isExist = document.getElementById("homePage");
    if (isExist != null) return;

    /* Remove the current project page */
    current_div = document.getElementsByClassName("current-page")[0];
    current_div.innerHTML = "";

    /* Create the home page div */
    new_div = document.createElement("div");
    new_div.className = "personal-info";
    new_div.id = "homePage";

    /* Create the h2 title */
    title2 = document.createElement("h2");
    title2.textContent = "Software Developer";
    new_div.appendChild(title2);

    /* Create an Hello title */
    hello = document.createElement("h1");
    hello.textContent = "Hello I'm";
    hello.className = "hello";
    new_div.appendChild(hello);
    
    /* Create the h1 title */
    title1 = document.createElement("h1");
    title1.textContent = "Emanuel Melloul";
    title1.className = "name";
    new_div.appendChild(title1);

    /* Create the p description */
    description = document.createElement("p");
    description.textContent = "I'm a 26-year-old Software Engineering student.\n" + 
                              "Passionate about self-learning and challenges.\n" + 
                              "You are welcome to take a look at my projects.";
    new_div.appendChild(description);

    social_div=document.createElement("div");
    social_div.className="social";

    /* resume link creation */
    let resume_link= document.createElement("a");
    resume_link.href = isGitHubPages ? "/Portfolio-page/files/Resume.pdf" : "/files/Resume.pdf";
    resume_link.download = "Resume.pdf";
    resume_link.textContent = "Download Resume";
    resume_link.className = "resume-link";
    social_div.appendChild(resume_link);

    // /* Icons creation */
    icons_div=loadIcons();
    icons_div.className="home-icons";
    social_div.appendChild(icons_div);
    new_div.appendChild(social_div);

    /* Add apacial id to the home-icons */
    // const anchorElements = icons_div.querySelectorAll('.home-icons a');
    // anchorElements.forEach(anchorElement => {
    //     anchorElement.setAttribute('id','home-icon')
    // });

    /* Create a div to wrap everything */
    bigger_div = document.createElement("div");
    bigger_div.className = "home-page";
    bigger_div.appendChild(new_div);

    /* Circle wrapper creation */
    circle_wrapper = document.createElement("div");
    circle_wrapper.className = "circle-wrapper";
    bigger_div.appendChild(circle_wrapper);

    /* Rotating circle creation */
    rotating_circle = document.createElement("div");
    rotating_circle.className = "rotating-circle";
    circle_wrapper.appendChild(rotating_circle);

    /* Static image container creation - sibling of rotating circle */
    image_container = document.createElement("div");
    image_container.className = "image-container";
    circle_wrapper.appendChild(image_container);

    /* The static image inside the container */
    my_img = document.createElement("img");
    my_img.src = isGitHubPages ? "/Portfolio-page/images/emanuel/myImage.jpg" : "images/emanuel/myImage.jpg";
    // https://github.com/Emelloul98/Portfolio-page/blob/main/images/emanuel/myImage.jpg
    my_img.alt = "my image";
    image_container.appendChild(my_img);

    /* Enter the home page to the current page div */
    current_div.appendChild(bigger_div);
}


function loadSkills() {
    add_selected_css_to_page("Skills");
    // Check if the skills page is already open
    let isExist = document.getElementById("skillsPage");
    if (isExist != null) return;
    icons_div=loadIcons();
    icons_div.classList.add('icons');
    document.getElementsByClassName("icons")[0].appendChild(icons_div);
    // Remove the current project page
    let current_div = document.getElementsByClassName("current-page")[0];
    current_div.innerHTML = ""; 

    // Create the skills page div
    let new_div = document.createElement("div");
    new_div.className = "skills";
    new_div.id = "skillsPage";

    // Create the skills-list div
    let skills_list = document.createElement("div");
    skills_list.className = "skills-list";

    // Function to generate each skill row (title and skills list)
    function createSkillRow(titleText, skillsArray) {
        let skill_row = document.createElement("div");
        skill_row.className = "skill-row";

        let skill_title = document.createElement("h2");
        skill_title.textContent = titleText;
        skill_row.appendChild(skill_title);

        let skill_ul = document.createElement("ul");

        skillsArray.forEach(skill => {
            let skill_li = document.createElement("li");

            let skill_img = document.createElement("img");
            skill_img.className = "skill-icon";
            skill_img.src = skill.icon;
            skill_img.alt = `${skill.name} icon`;

            skill_li.appendChild(skill_img);
            skill_li.append(` ${skill.name}`);

            skill_ul.appendChild(skill_li);
        });

        skill_row.appendChild(skill_ul);
        return skill_row;
    }
    // Programming Languages
    let programmingLanguages = [
        { name: "Java", icon: isGitHubPages? "/Portfolio-page/icons/java.svg" : "/icons/java.svg"},
        { name: "Python", icon: isGitHubPages? "/Portfolio-page/icons/python.svg": "/icons/python.svg" },
        { name: "C", icon: isGitHubPages? "/Portfolio-page/icons/C.svg": "/icons/C.svg" },
        { name: "C++", icon: isGitHubPages? "/Portfolio-page/icons/C++.svg": "/icons/C++.svg" },
        { name: "JavaScript", icon: isGitHubPages? "/Portfolio-page/icons/javascript.svg": "/icons/javascript.svg" },
        { name: "HTML", icon: isGitHubPages? "/Portfolio-page/icons/html5.svg": "/icons/html5.svg" },
        { name: "CSS", icon: isGitHubPages? "/Portfolio-page/icons/css.svg": "/icons/css.svg" },
        { name: "Assembly", icon: isGitHubPages? "/Portfolio-page/icons/assembly.png": "/icons/assembly.png" },
        { name: "SQL", icon: isGitHubPages? "/Portfolio-page/icons/SQL.svg": "/icons/SQL.svg" }
    ];

    // Frameworks
    let frameworks = [
        { name: "React", icon: isGitHubPages? "/Portfolio-page/icons/react.svg": "/icons/react.svg" },
        { name: "React Native", icon: isGitHubPages? "/Portfolio-page/icons/react.svg": "/icons/react.svg" },
        { name: "Node.js", icon: isGitHubPages? "/Portfolio-page/icons/nodejs.svg": "/icons/nodejs.svg" },
        { name: "Express", icon: isGitHubPages? "/Portfolio-page/icons/express.svg": "/icons/express.svg" },
        { name: "jQuery", icon: isGitHubPages? "/Portfolio-page/icons/jquery.svg": "/icons/jquery.svg" }
    ];

    // Tools
    let tools = [
        { name: "git", icon: isGitHubPages? "/Portfolio-page/icons/git.svg" : "/icons/git.svg" },
        { name: "GitHub", icon: isGitHubPages? "/Portfolio-page/icons/gitHub.svg" : "/icons/gitHub.svg" },
        { name: "VS Code", icon: isGitHubPages? "/Portfolio-page/icons/VS-Code.svg" : "/icons/VS-Code.svg" },
        { name: "JetBrains", icon: isGitHubPages? "/Portfolio-page/icons/JetBrains.svg" : "/icons/JetBrains.svg" },
        { name: "Eclipse", icon: isGitHubPages? "/Portfolio-page/icons/eclipse.svg" : "/icons/eclipse.svg" },
        { name: "Linux VMware", icon: isGitHubPages? "/Portfolio-page/icons/vmware.svg" : "/icons/vmware.svg" },
        { name: "Postman", icon: isGitHubPages? "/Portfolio-page/icons/postman.svg" : "/icons/postman.svg" },
        { name: "Wireshark", icon: isGitHubPages? "/Portfolio-page/icons/wireshark.svg" : "/icons/wireshark.svg" }
    ];

    // Append skill rows to the skills-list div
    skills_list.appendChild(createSkillRow("Programming Languages:", programmingLanguages));
    skills_list.appendChild(createSkillRow("Frameworks:", frameworks));
    skills_list.appendChild(createSkillRow("Tools:", tools));

    // Append the skills-list div to the main skills div
    new_div.appendChild(skills_list);

    // Finally, append the new skills page to the current-page div
    current_div.appendChild(new_div);
}

function loadIcons()
{
document.getElementsByClassName("icons")[0].innerHTML = "";
const iconsDiv = document.createElement('div');

// Create the GitHub link
const githubLink = document.createElement('a');
githubLink.classList.add('icon');
githubLink.href = 'https://github.com/Emelloul98';
githubLink.target = '_blank';

// Create the GitHub icon
const githubIcon = document.createElement('i');
githubIcon.classList.add('fa-brands', 'fa-github', 'fa-2x');
githubLink.appendChild(githubIcon);

// Create the LinkedIn link
const linkedInLink = document.createElement('a');
linkedInLink.classList.add('icon');
linkedInLink.href = 'https://www.linkedin.com/in/emanuel-melloul-496125237/';
linkedInLink.target = '_blank';

// Create the LinkedIn icon
const linkedInIcon = document.createElement('i');
linkedInIcon.classList.add('fa-brands', 'fa-linkedin-in', 'fa-2x');
linkedInLink.appendChild(linkedInIcon);

// Create the email link
const emailLink = document.createElement('a');
emailLink.classList.add('icon');
emailLink.href = 'mailto:emanuelmelloul@gmail.com';

// Create the email icon
const emailIcon = document.createElement('i');
emailIcon.classList.add('fa-solid', 'fa-envelope', 'fa-2x');
emailLink.appendChild(emailIcon);

// Append the links to the icons div
iconsDiv.appendChild(githubLink);
iconsDiv.appendChild(linkedInLink);
iconsDiv.appendChild(emailLink);

return iconsDiv;
}

function loadProjects(){
    
    add_selected_css_to_page("Projects");
    // Check if the project page is already open
    let isExist = document.getElementById("projectsPage");
    if (isExist != null) {
        cleanProjectPage();
        displayProject();

        return;
    }
    
    // Remove the current project page
    let current_div = document.getElementsByClassName("current-page")[0];
    current_div.innerHTML = ""; 
    icons_div=loadIcons();
    icons_div.classList.add('icons');
    document.getElementsByClassName("icons")[0].appendChild(icons_div);
    
    // Create the projects page div
    let new_div = document.createElement("div");
    new_div.className = "projects";
    new_div.id = "projectsPage";

    current_div.appendChild(new_div);
    displayProject();
    // addSubject("Python Projects","Advanced Machine Learning projects involving algorithm comparison and classification using: Logistic Regression, Decision Trees, K-Means, GMM, K-Fold Cross-Validation, Bagging, and AdaBoost.",pythonButtonClick);
    // addSubject("C projects", "Advanced Machine Learning projects involving algorithm comparison and classification using: Logistic Regression, Decision Trees, K-Means, GMM, K-Fold Cross-Validation, Bagging, and AdaBoost.",cButtonClick);
    // addSubject("Full-Stack projects", "Advanced Machine Learning projects involving algorithm comparison and classification using: Logistic Regression, Decision Trees, K-Means, GMM, K-Fold Cross-Validation, Bagging, and AdaBoost.",fullStackButtonClick);
}  
function displayProject(){
    cleanProjectPage();
    projects_div= document.getElementsByClassName("projects")[0];
    content_div=document.createElement("div");
    content_div.className="content";
    projects_div.appendChild(content_div);

    addSubjectImage(isGitHubPages? "/Portfolio-page/images/subjects/machine-learning.webp" :"/images/subjects/machine-learning.webp",pythonButtonClick);
    addSubjectImage(isGitHubPages? "/Portfolio-page/images/subjects/c-programming.png" : "/images/subjects/c-programming.png",cButtonClick);
    addSubjectImage(isGitHubPages? "/Portfolio-page/images/subjects/full-stack-web-development.jpg" :"/images/subjects/full-stack-web-development.jpg",fullStackButtonClick);
}
function addSubjectImage(img,func){
    const subject_div = document.getElementsByClassName("content")[0];
    subject_img= document.createElement("img");
    subject_img.src=img;
    subject_img.className="subject-image";
    subject_img.addEventListener("click",func);
    subject_div.appendChild(subject_img);
}
function createAndAppendProjectImage(sources,event_listeners){
    // Get the projects div and create projects list
    projects_div = document.getElementsByClassName("projects")[0];
    projects_list = document.createElement("div");
    projects_list.className = "projects-list";
    projects_div.appendChild(projects_list);
    for (let i = 0; i < sources.length; i++) 
    {
        const img = document.createElement("img");
        img.src = sources[i];  
        img.className = "project-image";  
        img.addEventListener("click", event_listeners[i]);  
        projects_list.appendChild(img);  
    }
}
function pythonButtonClick() {
    cleanProjectPage();
    createBackIcon(displayProject);
    // Arrays for sources, class names, and event listener functions
    const img_sources = [
        isGitHubPages? "/Portfolio-page/images/Python/python1/unsupervised.webp" :"/images/Python/python1/unsupervised.webp",
        isGitHubPages? "/Portfolio-page/images/Python/python2/Machine-Learning-Algorithms.webp" : "/images/Python/python2/Machine-Learning-Algorithms.webp",
        isGitHubPages? "/Portfolio-page/images/Python/python3/ensemble.jpg" : "/images/Python/python3/ensemble.jpg"
    ];
    const event_listeners = [firstPythonProjectClicked, secondPythonProjectClicked, thirdPythonProjectClicked];
    // Call the helper function to append the images
    createAndAppendProjectImage(img_sources,event_listeners);
}
function cButtonClick()
{
    cleanProjectPage();
    createBackIcon(displayProject);
    const img_sources = [
        isGitHubPages? "/Portfolio-page/images/C/c1/proxy-server.jpg" : "/images/C/c1/proxy-server.jpg",
        isGitHubPages? "/Portfolio-page/images/C/c2/chat-server.png" : "/images/C/c2/chat-server.png",
        isGitHubPages? "/Portfolio-/images/C/c3/Linux-Inode.jpg.webp" : "/images/C/c3/Linux-Inode.jpg.webp",
        isGitHubPages? "/Portfolio-page/images/C/c4/bounded-buffer.jpg" : "/images/C/c4/bounded-buffer.jpg",
        isGitHubPages? "/Portfolio-page/images/C/c5/Linux-Shell-Scripting.jpg" : "/images/C/c5/Linux-Shell-Scripting.jpg",
        isGitHubPages? "/Portfolio-page/images/C/c6/Memory-Management .jpg" : "/images/C/c6/Memory-Management .jpg" 
    ];
    const event_listeners = [firstCProjectClicked,secondCProjectClicked,thirdCProjectClicked,fourthCProjectClicked,fifthCProjectClicked,sixthCProjectClicked];
    // Call the helper function to append the images
    createAndAppendProjectImage(img_sources,event_listeners);
}

function fullStackButtonClick()
{
    cleanProjectPage();
    createBackIcon(displayProject);
    const img_sources = [
        isGitHubPages? "/Portfolio-page/images/full-stack/full2/Rest.png" : "/images/full-stack/full2/Rest.png",
        isGitHubPages? "/Portfolio-page/images/full-stack/full3/Building-a-RESTful-API-Using-Node.webp" : "/images/full-stack/full3/Building-a-RESTful-API-Using-Node.webp"
    ];
    const event_listeners = [firstFullStackProjectClicked,secondFullStackProjectClicked,thirdFullStackProjectClicked];
    // Call the helper function to append the images
    createAndAppendProjectImage(img_sources,event_listeners);
    
}



function add_project(proj_title,proj_description,proj_images,proj_link,proj_texts,prev_page_func)
{
    cleanProjectPage();
    project_div=document.getElementsByClassName("projects")[0];
    const new_div = document.createElement("div");  // Create a new div to hold all elements
    new_div.className = "current-project";  
    
    // Create and append close button
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "&#10005;"; // X symbol
    closeButton.className = "close-button";
    closeButton.onclick = prev_page_func;
    new_div.appendChild(closeButton);

    // Create a flex container to hold title and link
    const title_link_container = document.createElement("div");
    title_link_container.className = "title-link-container";

    // Create and append project title
    const project_title = document.createElement("h2");
    project_title.textContent = proj_title;
    title_link_container.appendChild(project_title);

    // Create and append project link
    const project_link = document.createElement("a");
    project_link.textContent = "View Project code";
    project_link.href = proj_link;
    project_link.target = "_blank";
    title_link_container.appendChild(project_link);
    
    // Append the container to the new_div
    new_div.appendChild(title_link_container);    
    
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

    // Finally, append the new div to the project_div
    project_div.appendChild(new_div);
}

function loadContact(){
    add_selected_css_to_page("Contact");
    // Check if the contact page is already open
    let isExist = document.getElementById("contactPage");
    if (isExist != null) return;

    // Remove the current project page
    let current_div = document.getElementsByClassName("current-page")[0];
    current_div.innerHTML = ""; // Clear existing content

    // Create the contact page div
    let new_div = document.createElement("div");
    new_div.className = "contact";
    new_div.id = "contactPage";
}

function add_selected_css_to_page(page_name) {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        // Remove 'selected-page' class from all items
        item.classList.remove('selected-page');

        // Check the text content of the <a> element inside the <li>
        const linkText = item.querySelector('a').textContent.trim();
        
        // If the link text matches the provided page name, add 'selected-page' class
        if (linkText === page_name) {
            item.classList.add('selected-page');
        }
    });
}
function cleanProjectPage(){
    const project_div = document.getElementsByClassName("projects")[0];
    project_div.innerHTML = "";
}
function createBackIcon(func){
    const icon = document.createElement('i');
    icon.className = 'fa fa-arrow-circle-right'; 
    icon.style.fontSize = '36px'; 
    icon.setAttribute('id', 'back-icon');
    icon.addEventListener('click', func);
    // Append the icon to a specific element in your document
    document.getElementsByClassName("projects")[0].appendChild(icon);
}


/*                                                                        
    -------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

function firstPythonProjectClicked(){
    title="Unsupervised Learning on a Digits Dataset";
    description="In this project, I applied unsupervised learning techniques on the digits dataset from sklearn, which contains 64-dimensional data representing hand-written digits. My objective was to cluster the data into three distinct groups using Gaussian Mixture Model (GMM) and KMeans algorithms. These clustering methods were applied to identify patterns and group the data without any prior labels. I evaluated the performance of both algorithms using metrics such as silhouette score, inertia, and Bayesian Information Criterion (BIC), while visualizing the resulting clusters to gain deeper insights into the structure of the data. Additionally, I explored how dimensionality reduction techniques, such as PCA, could enhance clustering results and make visual interpretation more accessible.";
    images=["/images/Python/python1/realData.png","/images/Python/python1/elbowFunction.png","","/images/Python/python1/kmean-vs-GMM.png"];
    link="https://github.com/Emelloul98/Clustering-with-GMM-and-KMeans"
    pca="Principal Component Analysis (PCA): I started by applying PCA to reduce the dimensionality of the data from 64 to 2 dimensions, allowing me to visualize the data in a two-dimensional space. This transformation helped me understand the underlying structure of the data and identify patterns that could be used for clustering.";
    elbow="Elbow Method: I used the elbow method to determine the optimal number of clusters for the K-Means algorithm. By plotting the inertia values for different values of k, I identified the point where the rate of decrease in inertia slows down, indicating the optimal number of clusters.";
    kmeans="K-Means Clustering: I experimented with various values of k, ranging from 1 to 10, and used the elbow method to find the optimal number of clusters. After selecting the best k, I evaluated the performance by comparing the cluster assignments with the true digit labels provided in the dataset using the sklearn library. This analysis allowed me to assess how well the K-Means algorithm grouped similar data points and whether the cluster assignments corresponded to the actual labels.";
    gmm="Gaussian Mixture Model (GMM): I proceeded by implementing the GMM algorithm and compared the clustering results against K-Means. I adjusted the parameters for convergence and ensured the clusters had a Gaussian distribution. Similar to K-Means, I visualized the clusters and analyzed the cluster assignments to determine if they aligned with the actual digit labels."; 
    texts=[pca,elbow,kmeans,gmm];
    add_project(title,description,images,link,texts,pythonButtonClick);
}
function secondPythonProjectClicked(){
    title="ML Optimization Algorithms Comparison";
    description="This project compares several machine learning optimization algorithms, including Stochastic Gradient Descent (SGD), Batch Gradient Descent, and their Singular Value Decomposition (SVD)-based versions for dimensionality reduction. The goal was to analyze the performance, convergence, and efficiency of these algorithms across various datasets. By incorporating SVD, I examined the effect of reducing the feature space on optimization performance. The project includes Python implementations of the algorithms, Jupyter Notebooks for testing, and visualizations of convergence behaviors and execution times.";
    images=["/images/Python/python2/comparison1.png", "/images/Python/python2/comparison2.png"];
    link="https://github.com/Emelloul98/Machine-Learning-Optimization-Algorithms-Comparison";
    firstImageDescription="Convergence plots for Stochastic Gradient Descent (SGD), Batch Gradient Descent, and SVD-enhanced algorithms were generated to assess how quickly each method approaches the optimal solution. The visualizations highlight the differences in convergence speed, with SGD showing faster convergence in early stages but sometimes overshooting the minimum. Batch Gradient Descent, while slower per iteration, provides a more stable path to convergence, especially in noisy datasets.";
    secondImageDescription="Execution time comparisons were made for the different algorithms, revealing how computationally expensive they are. With SVD, dimensionality reduction significantly lowered execution times, making the optimization more efficient for large datasets. The experiment emphasized that while SVD reduces complexity, it may sometimes slightly compromise the accuracy of the final model compared to using the full feature set.";
    texts=[firstImageDescription, secondImageDescription];
    add_project(title, description, images, link, texts,pythonButtonClick);
}
function thirdPythonProjectClicked(){ 
    title="Ensemble Learning Algorithms Comparison";
    description="This project compares the performance and efficiency of ensemble learning algorithms, including AdaBoost, Bagging, and K-Fold Cross Validation, in predicting employee attrition. The goal was to evaluate each method's accuracy, bias-variance tradeoff, and execution time using real-world datasets. The project includes Python implementations of the algorithms, Jupyter Notebooks for testing, and visualizations of accuracy, performance metrics, and computational efficiency.";
    images=["/images/Python/python3/feature selection.png", "/images/Python/python3/adaboost.png"];
    link="https://github.com/Emelloul98/Ensemble-Learning-Algorithms-AdaBoost-K-Fold-Cross-Validation-and-Bagging.git";
    firstImageDescription="The first image shows the effect of feature selection on the F1 score, where increasing the number of selected features significantly impacts model performance. The F1 score fluctuates as more features are introduced, revealing a sweet spot where the balance between the number of features and model accuracy is optimized.";
    secondImageDescription="The second image presents the F1 score comparison for AdaBoost with decision trees at varying max depths. The train F1 score improves consistently with deeper trees, while the test F1 score plateaus after a certain depth, indicating the point where the model may start overfitting.";
    texts=[firstImageDescription, secondImageDescription,
        "Bagging (Bootstrap Aggregating) is used in this project to reduce model variance and improve robustness by training multiple decision trees on different subsets of the data. This method averages the results of individual trees to produce a more accurate and stable prediction.",
        "K-Fold Cross-Validation was applied to ensure the model's performance generalizes well to unseen data by splitting the dataset into multiple subsets, training on a combination of them, and testing on the remaining subset. This helped optimize hyperparameters and ensure the model wasn't overfitting to specific data partitions.",
        "AdaBoost (Adaptive Boosting) was implemented to enhance the performance of the decision tree by focusing on harder-to-classify instances. This technique builds multiple trees, each attempting to correct the errors of the previous ones, leading to an overall stronger classifier.",
        "Throughout the project, decision trees were the primary model used in combination with these techniques. By applying Bagging, K-Fold, and AdaBoost, the aim was to strike a balance between model complexity, accuracy, and overfitting control."
    ];    
    add_project(title, description, images, link, texts,pythonButtonClick);
}
function firstCProjectClicked() { 
    title = "Proxy Server and Thread Pool Project";
    description = "This project implements a multi-threaded proxy server that facilitates efficient handling of client requests by utilizing a thread pool. It aims to understand networking principles, concurrent programming, and the mechanics of proxy servers, which act as intermediaries between clients and servers.";
    link = "https://github.com/Emelloul98/Proxy-Server-with-Thread-Pool.git";
    images = [];
    texts = [
        "The proxy server serves as a gateway that forwards client requests to target servers, allowing for enhanced security, caching, and load balancing. This implementation provides a practical understanding of how proxies work in real-world applications, particularly in scenarios involving HTTP traffic. By intercepting and relaying requests and responses, the proxy server can log traffic, filter content, and even cache responses to improve performance.",
        "A key feature of this project is its multi-threaded architecture, which enables the server to handle multiple client connections simultaneously. By employing a thread pool, the server optimizes resource management and reduces the overhead associated with creating and destroying threads for each request. This approach not only improves responsiveness but also ensures that the server can efficiently manage varying workloads without compromising performance.",
        "The implementation includes detailed error handling and logging mechanisms. This allows the server to gracefully manage connection issues, invalid requests, and server errors, providing meaningful feedback to clients while maintaining stability. Logging serves as an essential tool for monitoring traffic patterns and diagnosing issues, highlighting the importance of transparency and reliability in network applications.",
        "In addition to basic request handling, the proxy server supports various HTTP methods (GET, POST, etc.) and can manage headers effectively. This includes adding, modifying, or removing headers as necessary, which is crucial for proper communication between clients and servers. The ability to manipulate headers allows for greater flexibility and control over request processing, showcasing how proxies can be tailored for specific needs.",
        "The project also explores the implications of using a proxy server in terms of security and privacy. By routing requests through the proxy, sensitive information can be masked, protecting client identities and enhancing overall security. This aspect is particularly relevant in today’s context, where data protection and privacy are paramount. The server is designed to adhere to best practices in security, ensuring that client data remains confidential.",
        "Furthermore, the thread pool implementation enables dynamic scaling of resources based on current demand. The server can adjust the number of active threads to match the workload, which is an essential consideration for performance optimization. This dynamic approach illustrates how modern servers adapt to varying traffic conditions, ultimately enhancing user experience.",
        "Overall, this project serves as a comprehensive educational tool that combines networking concepts with concurrent programming techniques. It provides insights into the architecture of proxy servers and the intricacies of thread management. By engaging with this project, users gain a solid foundation in building efficient, robust network applications while enhancing their programming skills and understanding of system-level interactions in software development."
    ];    
    add_project(title, description, images, link, texts, cButtonClick);
}
function secondCProjectClicked() { 
    title = "Chat Server";
    description = "This project implements a chat server in C designed to handle multiple client connections concurrently. It transforms incoming messages to uppercase before broadcasting them to all connected clients, utilizing non-blocking I/O for efficient communication. The server manages client connections with a connection pool and handles graceful termination with signal support.";
    images = [];
    link = "https://github.com/Emelloul98/Chat-Server-in-C.git";
    texts = [
        "The chat server allows multiple clients to connect simultaneously, facilitating real-time communication. Each client can send messages that are broadcast to all others, promoting an interactive chat environment.",
        "Non-blocking socket operations are employed to ensure that the server can handle multiple connections without being stalled by any single client, enhancing responsiveness and overall performance.",
        "The server is designed to be robust, with error handling mechanisms in place to manage issues such as connection failures and invalid data. It ensures that clients remain connected and can send messages without interruption.",
        "Graceful server shutdown functionality is implemented, allowing the server to close connections cleanly and ensure that all active clients are informed before termination.",
        "The project showcases effective use of socket programming in C, demonstrating key principles of network communication, concurrency, and real-time data processing."
    ];    
    add_project(title, description, images, link, texts, cButtonClick);
}
function thirdCProjectClicked() { 
    title = "Inode File System Project";
    description = "This project implements a custom inode-based file system, providing an in-depth exploration of how operating systems manage files at a low level. The focus is on understanding inodes, file allocation strategies, and the overall structure of file systems.";
    link = "https://github.com/Emelloul98/Linux-File-System-Simulation.git";
    images = [];
    texts = [
        "The inode file system simulates the behavior of traditional Unix-like file systems, using inodes to store critical metadata for each file. Each inode contains information such as the file size, ownership (user and group IDs), permissions, timestamps (creation, modification, and access times), and pointers to the actual data blocks on disk. This structure allows for efficient access and management of files, making it a cornerstone of many modern operating systems.",
        "Key features of the project include the ability to create, read, write, and delete files. Each operation is designed to demonstrate the underlying mechanics of file handling. For instance, when a file is created, an inode is allocated, and its metadata is initialized. When a file is read or written, the system utilizes the inode to locate the corresponding data blocks, showcasing how the file system translates user requests into disk operations.",
        "The project incorporates different file allocation strategies, including contiguous, linked, and indexed allocations. Users can observe how these methods affect performance, fragmentation, and ease of access. The inode-based approach provides advantages in terms of flexibility and speed, particularly in scenarios where file sizes vary widely or where many small files are managed.",
        "Error handling is another critical component of the project. It includes mechanisms to handle scenarios such as invalid file operations (e.g., attempting to read a non-existent file), permission violations, and file system corruption. This not only emphasizes the importance of robust error detection and reporting but also helps users understand how operating systems protect file integrity and maintain stability.",
        "Additionally, the project simulates file system commands such as listing directories, changing file permissions, and traversing the directory structure. It illustrates how inodes work in conjunction with directory entries to create a user-friendly interface while managing the complexities of file storage in the background.",
        "Overall, this project serves as an educational tool that reinforces foundational concepts of file systems and inode management. It provides practical insights into the complexities of file storage, retrieval, and error handling, preparing users for a deeper understanding of advanced file system design and management techniques. This project not only enhances coding skills but also cultivates a solid grasp of how operating systems operate at a fundamental level."
    ];    
    add_project(title, description, images, link, texts, cButtonClick);
}
function fourthCProjectClicked() { 
    title = "Bounded Buffer Problem";
    description = "This project implements a bounded buffer problem using inter-process communication (IPC) mechanisms and multithreading in C. It consists of two main programs: a writer (producer) and a reader (consumer). The project utilizes shared memory for data transfer between processes, semaphores for synchronization, and POSIX threads for parallel processing of polynomial operations. Key components include System V IPC for shared memory management, POSIX semaphores for process synchronization, and pthreads for concurrent computation within the reader process.";
    images = [];
    link = "https://github.com/Emelloul98/Bounded_buffer_problem.git";
    texts = [
        "The shared memory mechanism is central to this project, allowing efficient data transfer between the writer and reader processes. It's implemented using the System V IPC API, specifically shmget() for creation and shmat() for attachment. The shared memory segment acts as a circular buffer, enabling the writer to input polynomial operations and the reader to process them without unnecessary data copying between processes.",
        "Semaphores play a crucial role in synchronizing access to the shared buffer. Three named semaphores (mutex, full, and empty) are used to implement the producer-consumer pattern. The mutex semaphore ensures mutual exclusion when accessing the shared memory, preventing race conditions. The full and empty semaphores manage the buffer's state, indicating filled and available slots respectively, thus preventing overflow and underflow conditions.",
        "The project demonstrates effective use of POSIX threads (pthreads) in the reader program. Threads are employed to parallelize the processing of polynomial operations, particularly for addition and subtraction. This multithreading approach significantly enhances performance by utilizing multi-core processors efficiently, allowing simultaneous computation of different polynomial coefficients.",
        "Error handling and resource management are thoroughly implemented throughout the project. This includes proper initialization and cleanup of IPC resources, semaphores, and dynamically allocated memory. The code also handles various edge cases, such as buffer overflow in input handling and potential failures in system calls, ensuring robust operation even under unexpected conditions.",
        "The polynomial operations (addition, subtraction, and multiplication) are implemented with careful consideration of numerical precision and efficiency. The project uses dynamic memory allocation to handle polynomials of varying degrees, and implements algorithms that efficiently compute results even for large polynomials. The output formatting is designed to clearly present the resulting polynomials in a standard algebraic notation."
    ];    
    add_project(title, description, images, link, texts, cButtonClick);
}
function fifthCProjectClicked(){ 
    title="Custom Shell Project";
    description="This project implements a custom shell in C, allowing users to execute commands, handle input/output redirection, and manage processes. The goal was to create a functional shell environment that mimics basic shell features while demonstrating key concepts in process management, string manipulation, and system calls.";
    images = [];
    link = "https://github.com/Emelloul98/Mini_shell.git";
    texts=[
        "The custom shell serves as a command-line interface that interprets user input, executes commands, and provides output. The shell processes user commands by parsing the input string into individual components, handling various commands such as built-ins and external executables. This involves using functions for string manipulation to accurately break down the input into command and arguments.",
        "Key features of the shell include executing foreground and background processes. The shell supports background execution, allowing users to continue using the shell while a process runs. This is accomplished by forking new processes using the `fork()` system call and using `exec()` to replace the child process's memory space with the specified command. The shell also tracks the status of these processes, enabling users to manage their execution effectively.",  
        "Input and output redirection is another significant feature of the shell. Users can redirect the standard input and output streams using the '>' and '<' operators, respectively. This involves manipulating file descriptors with system calls like `open()`, `dup2()`, and `close()`. By doing so, the shell can read from files or write output to files, enhancing its functionality and flexibility.",
        "Additionally, the shell implements error handling and user feedback, informing users of invalid commands or issues during execution. This includes checking for valid syntax and ensuring that the necessary files exist before attempting to execute commands. The goal was to provide a robust user experience while adhering to the principles of Unix-like operating systems.",
        "Overall, this project not only highlights the practical aspects of shell implementation but also reinforces the understanding of system-level programming in C, including process control, file management, and the interaction between user input and system calls. It serves as an excellent foundation for exploring more complex shell functionalities in the future."
    ];    
    add_project(title, description, images, link, texts, cButtonClick);
}
function sixthCProjectClicked(){ 
    title="Memory Simulation Project";
    description="This project simulates memory management techniques, including paging and segmentation, to demonstrate how an operating system manages memory allocation. The goal is to understand concepts such as virtual memory, page tables, and memory address translation.";
    link = "https://github.com/Emelloul98/Memory_simulation.git";
    images = [];
    texts=[
        "The memory simulation provides a visual representation of how memory is allocated and managed in an operating system. It simulates the process of translating virtual addresses to physical addresses, helping users understand the relationship between the two in a multi-process environment.",
        "Key features include implementing paging, where memory is divided into fixed-size pages, allowing for efficient allocation and retrieval. The simulation displays page tables, showing the mapping of virtual pages to physical frames, and highlights how the operating system handles page faults when accessing non-resident pages.",
        "Segmentation is another critical aspect of the simulation. It represents memory as a collection of variable-sized segments, facilitating more intuitive memory management for programs with different data structures. Users can observe how segments are created, resized, and accessed during execution.",
        "Error handling is integrated into the simulation to showcase scenarios such as invalid memory access and segmentation faults. This helps users recognize the importance of memory protection and management in operating systems, emphasizing the need for robust error detection mechanisms.",
        "Overall, this project serves as an educational tool, reinforcing foundational concepts of memory management and providing practical insights into the complexities of operating systems. It lays the groundwork for further exploration of advanced memory management techniques."
    ];    
    add_project(title, description, images, link, texts, cButtonClick);
}
function firstFullStackProjectClicked() { 
    title = "Image Search Application";
    description = "This project is an interactive image search application that utilizes the Unsplash API to allow users to search for and display images based on their queries. It features a responsive design with a user-friendly interface that updates dynamically as the user types in the search input. Key functionalities include displaying images in groups, loading more results, and providing detailed information about each image when clicked.";
    images = ["","/images/full-stack/full1/Example1.png","/images/full-stack/full1/Example2.png"];
    link = "http://malloulem.mysoft.jce.ac.il/ex1/";
    texts = [
        "The application starts by initializing the HTML structure dynamically using JavaScript, creating a header, search input, and main sections for images and information. This approach enhances modularity and separation of concerns in the code, making it easy to maintain and expand.",
        "Users can input search queries into a text field, which triggers an API call to Unsplash. The app fetches images based on the query using an AJAX request via JavaScript's `fetch` API. The `fetch` method sends a GET request to the Unsplash API, retrieves a JSON response, and parses it to extract image data.",
        "A typical AJAX request in this application uses the following steps: when the user submits a search query, the app sends the query as a parameter in the URL to Unsplash. Once the response is received, the app processes the image data and dynamically updates the UI by displaying the relevant images.",
        "The app then presents these images with hover effects to enhance interactivity, with options to load more results if necessary. Each image can be clicked to display additional details, such as the title and like count.",
        "The 'Load More' button uses a similar AJAX call to fetch additional results in a paginated manner, allowing the user to see more results without reloading the page."
    ];   
    add_project(title, description, images, link, texts, fullStackButtonClick);
}
function secondFullStackProjectClicked() { 
    title = "Project Management using REST API";
    description = "This project is a distributed project management system utilizing a REST API to manage projects, team members, and project-related images sourced from the Unsplash API. It includes robust client-side validation and server-side schema validation to ensure data integrity. Core functionalities include CRUD operations for projects, image management, and a user-friendly interface for project tracking.";
    images = ["","","/images/full-stack/full2/table.png","/images/full-stack/full2/project-form.png","/images/full-stack/full2/image-search.png","/images/full-stack/full2/project-images.png"];
    link = "https://github.com/Emelloul98/Project-Management-REST-API-with-Unsplash-Integration.git";
    texts = [
        "The system begins with a server-side setup using Node.js and Express to manage routing for REST API requests. CRUD operations are fully implemented for projects, allowing users to create, read, update, and delete project information. Each project includes details like project name, description, team members, and start dates. Server-side validation schemas, written using libraries like Joi, ensure data integrity before insertion or updates are made to the JSON database.",        
        "Client-side validation is also a key feature of this project. When users interact with forms to add or update projects, the application ensures that required fields are filled out and that data types (such as dates and text fields) are properly validated before the form is submitted. The validation provides immediate feedback to users, enhancing the overall usability of the system.",        
        "The first Image shows the main table that displays the existing projects in the system. This dynamic table fetches data from the backend using AJAX requests and updates the UI in real-time. Users can view project details, update existing projects, or delete them using the table's action buttons.",    
        "New projects can be added via a form interface, demonstrated in the second image. This form allows users to input details about the project and its team members. It also triggers client-side validation before submitting the data through a POST request to the REST API, where server-side validation further ensures the integrity of the entered data.",    
        "The third image displays the image search page, which utilizes the Unsplash API. Here, users can search for images by keyword, fetch results dynamically, and select images to associate with specific projects. The REST API manages these image-related operations by storing links to the selected images alongside the project records in the JSON database.",    
        "Finally, the fourth image shows the interface where users can view the images currently associated with a project. These images are fetched from the database and displayed in a grid format, allowing users to remove images or view additional details. All image-related functionality is handled through RESTful routes that enable creating, updating, and deleting images for each project."
    ];   
    add_project(title, description, images, link, texts, fullStackButtonClick);
}
function thirdFullStackProjectClicked() { 
    title = "REST API with MongoDB";
    description = "This project is a RESTful project management service built using Node.js, Express, and MongoDB. It enables the creation, updating, and management of projects and their associated team members and images. The service features robust client-side and server-side validation using Mongoose schemas to ensure data integrity, efficient routing, and CRUD operations for seamless project management. A Postman collection has been created to test and interact with the API endpoints.";
    link = "https://github.com/Emelloul98/Distributed-Project-Management-REST-API-using-MongoDB.git";
    texts = [
        "This project is built with Node.js and Express for routing and handling REST API requests. The system manages projects, team members, and images, storing all data in a MongoDB database. Core functionalities include creating, reading, updating, and deleting project information, each associated with a project manager and team members. MongoDB's Mongoose library is used for schema definition and validation, ensuring data consistency and integrity.",
        "For each project, key details such as project name, description, and start date are stored, along with a list of team members and their roles. Each team member has a name, email, and assigned role, ensuring that the project structure is well-defined. The system also manages the addition of project-related images, where each image is associated with a unique project.",
        "Client-side validation ensures that users input valid data into forms before submission. This helps to avoid errors when creating or updating project data. Server-side validation is also in place via Mongoose schemas, providing an additional layer of validation before data is persisted to the database.",
        "The system implements CRUD operations for projects and members, including functions like `CreateProject`, `getProjects`, `addImageToProject`, and `deleteImageFromProject`. These operations are handled via RESTful routes in the Express framework, providing efficient, scalable interactions with the MongoDB database.",
        "A Postman collection has been created for this project, allowing easy testing and interaction with the API. The collection includes predefined requests for all core functionalities such as creating projects, managing members, and handling images, making it simple to explore and test each endpoint.",
        "This project focuses on keeping the code clean, structured, and organized into modular components. All routes follow RESTful principles, and the project includes thorough input validation both client-side and server-side to ensure high-quality data management. The service is designed to run on port 3001 and is initiated via `npm start`."
    ];   
    add_project(title, description, [], link, texts, fullStackButtonClick);
}
