import { FaGithub } from 'react-icons/fa';

const About = () => {
    return (
        <div className="container is-fluid">
            <section className="section is-medium">
                <h1 className="title">Github Repo Explorer</h1>
                <hr />
                <h2 className="subtitle pt-2">
                    A project that uses the <strong>Github API</strong> to view popular repositories.
                </h2>
                <div className="is-primary">
                    <div className="is-align-self-center level level-left has-text-black">
                        <span className="is-size-5 mr-2">Project Code can be found at: </span>
                        <a href="https://github.com/VirajPatidar" target="_blank" rel="noreferrer">
                            <button className="button has-background-grey-lighter"><FaGithub size={25} className="mr-2 has-text-black" />Viraj Patidar</button>
                        </a>
                    </div>
                    The project lists out the repositories based on the name/description and language selected by the user and displays the result sorted according the number of stars it has received. <br /> <br />
                    You can also view the the repository and profile details by clicking on their respective links. <br />
                    There is a limit on the number of requests a user can make, which usually gets refreshed after a few minutes.
                </div>
            </section>
        </div>
    );
}

export default About;