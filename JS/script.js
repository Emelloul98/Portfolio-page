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
    my_img.src = "../images/myImage.jpg";
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
    current_div.innerHTML = ""; // Clear existing content

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
    if (isExist != null) return;
    // Remove the current project page
    let current_div = document.getElementsByClassName("current-page")[0];
    current_div.innerHTML = ""; // Clear existing content
    icons_div=loadIcons();
    icons_div.classList.add('icons');
    document.getElementsByClassName("icons")[0].appendChild(icons_div);
    // Create the projects page div
    let new_div = document.createElement("div");
    new_div.className = "projects";
    new_div.id = "projectsPage";
    /* creates the projects title */
    // title = document.createElement("h1");
    // title.textContent="Projects";
    // new_div.appendChild(title);
    /* creates the subject content div */
    subject_div = document.createElement("div");
    subject_div.className="subject-content";
    new_div.appendChild(subject_div);
    /* creates the details div */
    details_div=document.createElement("div");
    details_div.className="project-details";
    new_div.appendChild(details_div);
    current_div.appendChild(new_div);
    addSubject("Python Projects","Advanced Machine Learning projects involving algorithm comparison and classification using: Logistic Regression, Decision Trees, K-Means, GMM, K-Fold Cross-Validation, Bagging, and AdaBoost.",pythonButtonClick);
    addSubject("C projects", "Advanced Machine Learning projects involving algorithm comparison and classification using: Logistic Regression, Decision Trees, K-Means, GMM, K-Fold Cross-Validation, Bagging, and AdaBoost.",cButtonClick);
    addSubject("Full-Stack projects", "Advanced Machine Learning projects involving algorithm comparison and classification using: Logistic Regression, Decision Trees, K-Means, GMM, K-Fold Cross-Validation, Bagging, and AdaBoost.",fullStackButtonClick);
    /* enter the projects page to the current page div */
    
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
