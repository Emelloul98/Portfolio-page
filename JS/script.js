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
    resume_link.href = "../files/Resume.pdf";
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
    my_img.src = "../images/emanuel/myImage.jpg";
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
        { name: "Java", icon: "../icons/Java.svg" },
        { name: "Python", icon: "../icons/Python.svg" },
        { name: "C", icon: "../icons/C.svg" },
        { name: "C++", icon: "../icons/C++.svg" },
        { name: "JavaScript", icon: "../icons/JavaScript.svg" },
        { name: "HTML", icon: "../icons/HTML5.svg" },
        { name: "CSS", icon: "../icons/CSS.svg" },
        { name: "Assembly", icon: "../icons/assembly.png" },
        { name: "SQL", icon: "../icons/SQL.svg" }
    ];

    // Frameworks
    let frameworks = [
        { name: "React", icon: "../icons/React.svg" },
        { name: "React Native", icon: "../icons/React.svg" },
        { name: "Node.js", icon: "../icons/Nodejs.svg" },
        { name: "Express", icon: "../icons/Express.svg" },
        { name: "jQuery", icon: "../icons/jQuery.svg" }
    ];

    // Tools
    let tools = [
        { name: "git", icon: "../icons/git.svg" },
        { name: "GitHub", icon: "../icons/GitHub.svg" },
        { name: "VS Code", icon: "../icons/VS-Code.svg" },
        { name: "JetBrains", icon: "../icons/JetBrains.svg" },
        { name: "Eclipse", icon: "../icons/Eclipse.svg" },
        { name: "Linux VMware", icon: "../icons/VMware.svg" },
        { name: "Postman", icon: "../icons/Postman.svg" },
        { name: "Wireshark", icon: "../icons/Wireshark.svg" }
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

    addSubjectImage("../images/subjects/machine-learning.webp",pythonButtonClick);
    addSubjectImage("../images/subjects/c-programming.png",cButtonClick);
    addSubjectImage("../images/subjects/full-stack-web-development.jpg",fullStackButtonClick);
}
function addSubjectImage(img,func){
    const subject_div = document.getElementsByClassName("content")[0];
    subject_img= document.createElement("img");
    subject_img.src=img;
    subject_img.className="subject-image";
    subject_img.addEventListener("click",func);
    subject_div.appendChild(subject_img);
}
function pythonButtonClick() {
    cleanProjectPage();
    createBackIcon(displayProject);
    projects_div=document.getElementsByClassName("projects")[0];
    projects_list=document.createElement("div");
    projects_list.className="projects-list";
    projects_div.appendChild(projects_list);

    proj_1_img=document.createElement("img");
    proj_1_img.src="../images/python1/unsupervised.webp";
    proj_1_img.className="project-image";
    proj_1_img.addEventListener("click",firstPythonProjectClicked);
    projects_list.appendChild(proj_1_img);
    
    proj_2_img=document.createElement("img");
    proj_2_img.src="../images/python2/Machine-Learning-Algorithms.webp";
    proj_2_img.className="project-image";
    proj_2_img.addEventListener("click",secondPythonProjectClicked);
    projects_list.appendChild(proj_2_img);

    proj_3_img=document.createElement("img");
    proj_3_img.src="../images/python3/ensemble.jpg";
    proj_3_img.className="project-image";
    proj_3_img.addEventListener("click",thirdPythonProjectClicked);
    projects_list.appendChild(proj_3_img);

}
function firstPythonProjectClicked(){
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
function secondPythonProjectClicked(){
    title="Machine Learning Optimization Algorithms Comparison";
    description="This project compares several machine learning optimization algorithms, including Stochastic Gradient Descent (SGD), Batch Gradient Descent, and their Singular Value Decomposition (SVD)-based versions for dimensionality reduction. The goal was to analyze the performance, convergence, and efficiency of these algorithms across various datasets. By incorporating SVD, I examined the effect of reducing the feature space on optimization performance. The project includes Python implementations of the algorithms, Jupyter Notebooks for testing, and visualizations of convergence behaviors and execution times.";
    images=["../images/python2/comparison1.png", "../images/python2/comparison2.png"];
    link="https://github.com/Emelloul98/Machine-Learning-Optimization-Algorithms-Comparison";
    firstImageDescription="Convergence plots for Stochastic Gradient Descent (SGD), Batch Gradient Descent, and SVD-enhanced algorithms were generated to assess how quickly each method approaches the optimal solution. The visualizations highlight the differences in convergence speed, with SGD showing faster convergence in early stages but sometimes overshooting the minimum. Batch Gradient Descent, while slower per iteration, provides a more stable path to convergence, especially in noisy datasets.";
    secondImageDescription="Execution time comparisons were made for the different algorithms, revealing how computationally expensive they are. With SVD, dimensionality reduction significantly lowered execution times, making the optimization more efficient for large datasets. The experiment emphasized that while SVD reduces complexity, it may sometimes slightly compromise the accuracy of the final model compared to using the full feature set.";
    texts=[firstImageDescription, secondImageDescription];
    add_project(title, description, images, link, texts);
}
function thirdPythonProjectClicked(){ 
    title="Ensemble Learning Algorithms Comparison";
    description="This project compares the performance and efficiency of ensemble learning algorithms, including AdaBoost, Bagging, and K-Fold Cross Validation, in predicting employee attrition. The goal was to evaluate each method's accuracy, bias-variance tradeoff, and execution time using real-world datasets. The project includes Python implementations of the algorithms, Jupyter Notebooks for testing, and visualizations of accuracy, performance metrics, and computational efficiency.";
    images=["../images/python3/feature selection.png", "../images/python3/adaboost.png"];
    link="https://github.com/Emelloul98/Ensemble-Learning-Algorithms-AdaBoost-K-Fold-Cross-Validation-and-Bagging.git";
    firstImageDescription="The first image shows the effect of feature selection on the F1 score, where increasing the number of selected features significantly impacts model performance. The F1 score fluctuates as more features are introduced, revealing a sweet spot where the balance between the number of features and model accuracy is optimized.";
    secondImageDescription="The second image presents the F1 score comparison for AdaBoost with decision trees at varying max depths. The train F1 score improves consistently with deeper trees, while the test F1 score plateaus after a certain depth, indicating the point where the model may start overfitting.";
    texts=[firstImageDescription, secondImageDescription,
        "Bagging (Bootstrap Aggregating) is used in this project to reduce model variance and improve robustness by training multiple decision trees on different subsets of the data. This method averages the results of individual trees to produce a more accurate and stable prediction.",
        "K-Fold Cross-Validation was applied to ensure the model's performance generalizes well to unseen data by splitting the dataset into multiple subsets, training on a combination of them, and testing on the remaining subset. This helped optimize hyperparameters and ensure the model wasn't overfitting to specific data partitions.",
        "AdaBoost (Adaptive Boosting) was implemented to enhance the performance of the decision tree by focusing on harder-to-classify instances. This technique builds multiple trees, each attempting to correct the errors of the previous ones, leading to an overall stronger classifier.",
        "Throughout the project, decision trees were the primary model used in combination with these techniques. By applying Bagging, K-Fold, and AdaBoost, the aim was to strike a balance between model complexity, accuracy, and overfitting control."
    ];    
    add_project(title, description, images, link, texts);
}




function cButtonClick()
{
    cleanProjectPage();
}

function fullStackButtonClick()
{
    cleanProjectPage();
}

function add_project(proj_title,proj_description,proj_images,proj_link,proj_texts)
{
    cleanProjectPage();
    project_div=document.getElementsByClassName("projects")[0];
    const new_div = document.createElement("div");  // Create a new div to hold all elements
    new_div.className = "current-project";  
    // DODO: Create and append close button

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