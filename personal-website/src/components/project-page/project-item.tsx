import Project from "../../interfaces";

const ProjectItem = (props: Project) => {
    const { name, url, pic } = props;
    return (
        <div className="project-item">
            <a 
                href={url}
                target="_blank"
                rel="noreferrer noopener"
            >
                {pic && <img src={pic} alt={name} />}
                <p>{name}</p>
            </a>   
        </div>
    );
};

export default ProjectItem;