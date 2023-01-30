import React from "react";
//import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "90%", value: "90" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "77%",
          value: "77"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "65%",
          value: "65"
        },
        {
          id: "AngularJS_skill",
          content: "AngularJs",
          porcentage: "30%",
          value: "30"
        },
        
      ],
      about_me: [
        {
          id: "first-p-about",
          content:  "Subito dopo il diploma non volevo fare il percorso canonico dell'università ma approcciarmi subito al mondo del lavoro nell'ambito dello sviluppo web. Ho frequentato un ITS con specializzazione per lo sviluppo di sistemi software. Da questa esperienza mi porto dietro la capacità di apprendimento teorico pratico dalla fase di analisi alla scrittura del codice per la realizzazione di interfacce web. Il mio lavoro si basa sullo sviluppo di applicazioni web/mobile friendly, valutazione dell'architettura con l'occhio attento al design. Attualmente sto ampliando le mie skill focalizzando il mio interesse e apprendimento di ReactJs con tutte le sue integrazioni. Da sempre mi porto dietro la passione per la tecnologia, smartphone, iot, motori e dintorni."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">Chi sono</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
