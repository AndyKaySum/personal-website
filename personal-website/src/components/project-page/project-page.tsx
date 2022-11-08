import ProjectItem from './project-item';
import Project from '../../interfaces';

interface ProjectList {
    projects: Project[],
    [key: string]: any
}

const ProjectPage = (props: ProjectList) => {
    const { projects } = props;
    return (
        <div className="project-page">
            <div className="project-container">
                <h2>My Projects</h2>
                {projects.map((p: Project, i: number) => {
                    return (
                        <ProjectItem 
                            key={i}
                            name={p.name}
                            url={p.url}
                            pic={p.pic}
                        />
                    );
                })}
            </div>           
        </div>
    )
};

export default ProjectPage;