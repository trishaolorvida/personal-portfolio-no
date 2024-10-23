function App() {

  return (
    <>
      {/* # preloader ================================================== */}
        <div id="preloader">
            <div id="loader">
            </div>
        </div>


        {/* # page wrap
        ================================================== */}
        <div className="s-pagewrap" >

            <div className="circles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>


            {/* ## site header 
            ================================================== */}
            <header className="s-header">

                <div className="header-mobile">
                    <span className="mobile-home-link"><a href="index.html">Trisha.</a></span>
                    <a className="mobile-menu-toggle" href="#0"><span>Menu</span></a>
                </div>

                <div className="row wide main-nav-wrap">
                    <nav className="column lg-12 main-nav">
                        <ul>
                            <li><a href="index.html" className="home-link">Trisha.</a></li>
                            <li className="current"><a href="#intro" className="smoothscroll">Intro</a></li>
                            <li><a href="#about" className="smoothscroll">About</a></li>
                            <li><a href="#works" className="smoothscroll">Projects</a></li>
                            <li><a href="#contact" className="smoothscroll">Say Hello</a></li>
                        </ul>
                    </nav>
                </div>

            </header> {/* end s-header */}


            {/* ## main content
            ==================================================- */}
            <main className="s-content" />


                {/* ### intro
                ================================================== */}
                <section id="intro" className="s-intro target-section">

                <div className="row intro-content wide">

                    <div className="column">
                        <div className="text-pretitle with-line">
                            BSIS 3
                        </div>

                        <h1 className="text-huge-title">
                            I am Trisha, <br />
                            a 3rd year BSIS student <br />
                            at La Verdad <br /> 
                            Christian College, <br />
                            Apalit.
                        </h1>
                    </div>

                    <ul className="intro-social">
                        <li><a href="https://www.facebook.com/ventipyon" aria-label="Trisha's Facebook Profile">Facebook</a></li>
                        <li><a href="https://www.linkedin.com/in/trisha-olorvida-937913277/" aria-label="Trisha's LinkedIn Profile">LinkedIn</a></li>
                        <li><a href="https://github.com/trishaolorvida" aria-label="Trisha's GitHub Profile">GitHub</a></li>
                    </ul>

                </div> {/* end intro content */}

                <a href="#about" className="intro-scrolldown smoothscroll">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Scroll Down Icon</title>
                        <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" fillRule="evenodd" clipRule="evenodd" />
                    </svg>
                </a>

                </section> {/* end s-intro */}


                {/* ### about
                ================================================== */}
                <section id="about" className="s-about target-section">


                    <div className="row about-info wide" data-animate-block>

                        <div className="column lg-6 md-12 about-info__pic-block">
                            <img src="public/images/about-photo.jpg" 
                                srcSet="public/images/about-photo.jpg 1x, images/about-photo@2x.jpg 2x" alt="" className="about-info__pic" data-animate-el />
                        </div>

                        <div className="column lg-6 md-12">
                            <div className="about-info__text" >

                                <h2 className="text-pretitle with-line" data-animate-el>
                                    About
                                </h2>
                                <p className="attention-getter" data-animate-el>
                                    A 3rd year student at La Verdad Christian College
                                    taking up BS Information Systems.
                                    Dreaming of becoming a pre-school teacher
                                    at Japan after graduation.
                                </p>
                                <a href="#0" className="btn btn--medium u-fullwidth" data-animate-el>Download CV</a>

                            </div>
                        </div>
                    </div> {/* about-info */}


                    <div className="row about-expertise" data-animate-block>
                        <div className="column lg-12">

                            <h2 className="text-pretitle" data-animate-el>Skills</h2>

                            <ul className="skills-list h1" data-animate-el>
                                <li>Programming</li>
                                <li>Communication</li>
                                <li>Listening</li>
                            </ul>

                        </div>
                    </div> {/* end about-expertise */}


                    <div className="row about-timelines" data-animate-block>

                        <div className="column lg-6 tab-12">

                            <h2 className="text-pretitle" data-animate-el>
                                Experience
                            </h2>

                            <div className="timeline" data-animate-el>

                                <div className="timeline__block">
                                    <div className="timeline__bullet"></div>
                                    <div className="timeline__header">
                                        <h4 className="timeline__title">N/A</h4>
                                        <h5 className="timeline__meta">N/A</h5>
                                        <p className="timeline__timeframe">N/A</p>
                                    </div>
                                    <div className="timeline__desc">
                                        <p>. . .</p>
                                    </div>
                                </div>
        
                                <div className="timeline__block">
                                    <div className="timeline__bullet"></div>
                                    <div className="timeline__header">
                                        <h4 className="timeline__title">N/A</h4>
                                        <h5 className="timeline__meta">N/A</h5>
                                        <p className="timeline__timeframe">N/A</p>
                                    </div>
                                    <div className="timeline__desc">
                                        <p>. . .</p>
                                    </div>
                                </div>
        
                            </div> {/* end timeline */}

                        </div> {/* end column */}

                        <div className="column lg-6 tab-12">

                            <h2 className="text-pretitle" data-animate-el>
                                Education
                            </h2>

                            <div className="timeline" data-animate-el>

                                <div className="timeline__block">
                                    <div className="timeline__bullet"></div>
                                    <div className="timeline__header">
                                        <h4 className="timeline__title">Ismael Mathay Sr. Highschool</h4>
                                        <h5 className="timeline__meta">TechVoc-ICT</h5>
                                        <p className="timeline__timeframe">2020-2022</p>
                                    </div>
                                    <div className="timeline__desc">
                                        <p>Attended IMSHS from 7th grade to 12th grade. Took ICT strand.</p>
                                    </div>
                                </div>
        
                                <div className="timeline__block">
                                    <div className="timeline__bullet"></div>
                                    <div className="timeline__header">
                                        <h4 className="timeline__title">La Verdad Christian College</h4>
                                        <h5 className="timeline__meta">BS Information Systems</h5>
                                        <p className="timeline__timeframe">2022-current</p>
                                    </div>
                                    <div className="timeline__desc">
                                        <p>Currently attending LVCC, taking up BS Information Systems.</p>
                                    </div>
                                </div>
        
                            </div> {/* end timeline */}
                            
                        </div> {/* end column */}


                    </div> {/* end about-timelines */}

                </section> {/* end s-about */}


                {/* ### works
                ================================================== */}
                <section id="works" className="s-works target-section">


                    <div className="row works-portfolio">

                        <div className="column lg-12" data-animate-block>

                            <h2 className="text-pretitle" data-animate-el>
                                Projects
                            </h2>
                            <p className="h1" data-animate-el>
                                Here are some of my projects I have done. Feel free to check them out.
                            </p>
        
                            <ul className="folio-list row block-lg-one-half block-stack-on-1000">

                                <li className="folio-list__item column" data-animate-el>
                                    <a className="folio-list__item-link" href="https://github.com/trishaolorvida/webapp2-midterm-project">
                                        <div className="folio-list__item-pic">
                                            <img src="public/images/portfolio/bugpiano.jpg"
                                                srcSet="public/images/portfolio/bugpiano.jpg 1x, images/portfolio/bugpiano@2x.jpg 2x"  alt="" />
                                        </div>
                                        
                                        <div className="folio-list__item-text">
                                            <div className="folio-list__item-cat">
                                                WebApp2 Midterm Project
                                            </div>
                                            <div className="folio-list__item-title">
                                                Project.
                                            </div>
                                        </div>
                                    </a>
                                    <a className="folio-list__proj-link" href="https://github.com/trishaolorvida/webapp2-midterm-project" title="project link">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                    </a>
                                </li> {/*end folio-list__item */}

                                <li className="folio-list__item column" data-animate-el>
                                    <a className="folio-list__item-link" href="https://github.com/trishaolorvida/webapp2-final-project">
                                        <div className="folio-list__item-pic">
                                            <img src="public/images/portfolio/eepymelo.jpg" 
                                                srcSet="public/images/portfolio/eepymelo.jpg 1x, images/portfolio/eepymelo@2x.jpg 2x" alt="" />
                                        </div>
                                        
                                        <div className="folio-list__item-text">
                                            <div className="folio-list__item-cat">
                                                WebApp2 Final Project
                                            </div>
                                            <div className="folio-list__item-title">
                                                Project
                                            </div>
                                        </div>
                                    </a>
                                    <a className="folio-list__proj-link" href="https://github.com/trishaolorvida/webapp2-final-project" title="project link">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                    </a>
                                </li> {/*end folio-list__item */}

                                <li className="folio-list__item column" data-animate-el>
                                    <a className="folio-list__item-link" href="https://github.com/trishaolorvida/webapp2-laboratories">
                                        <div className="folio-list__item-pic">
                                            <img src="public/images/portfolio/melody.jpg" 
                                                srcSet="public/images/portfolio/melody.jpg 1x, images/portfolio/melody@2x.jpg 2x" alt="" />
                                        </div>
                                        
                                        <div className="folio-list__item-text">
                                            <div className="folio-list__item-cat">
                                                WebApp2 Laboratories
                                            </div>
                                            <div className="folio-list__item-title">
                                                Laboratories.
                                            </div>
                                        </div>
                                    </a>
                                    <a className="folio-list__proj-link" href="https://github.com/trishaolorvida/webapp2-laboratories" title="project link">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                    </a>
                                </li> {/*end folio-list__item */}

                                <li className="folio-list__item column" data-animate-el>
                                    <a className="folio-list__item-link" href="https://github.com/trishaolorvida/appdev1-midterm-exam">
                                        <div className="folio-list__item-pic">
                                            <img src="public/images/portfolio/pianowink.jpg"
                                                srcSet="public/images/portfolio/pianowink.jpg 1x, images/portfolio/pianowink@2x.jpg 2x" alt="" />
                                        </div>
                                        
                                        <div className="folio-list__item-text">
                                            <div className="folio-list__item-cat">
                                                AppDev1 Midterm Exam
                                            </div>
                                            <div className="folio-list__item-title">
                                                Exam.
                                            </div>
                                        </div>
                                    </a>
                                    <a className="folio-list__proj-link" href="https://github.com/trishaolorvida/appdev1-midterm-exam" title="project link">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                    </a>
                                </li> {/*end folio-list__item */}

                            </ul> {/* end folio-list */}

                        </div> {/* end column */}


                        {/* Modal Templates Popup
                        -------------------------------------------- */}
                        <div id="modal-01" hidden>
                            <div className="modal-popup">
                                <img src="public/images/portfolio/gallery/g-bugpiano.jpg" alt="" />
                    
                                <div className="modal-popup__desc">
                                    <h5>WebApp2 Midterm Project</h5>
                                    <p>Midterm Project BSIS2.</p>
                                    <ul className="modal-popup__cat"></ul>
                                </div>
                    
                                <a href="https://github.com/trishaolorvida/webapp2-midterm-project" className="modal-popup__details">Project link</a>
                            </div>
                        </div> {/* end modal */}

                        <div id="modal-02" hidden>
                            <div className="modal-popup">
                                <img src="public/images/portfolio/gallery/g-eepymelo.jpg" alt="" />
                    
                                <div className="modal-popup__desc">
                                    <h5>WebApp2 Final Project</h5>
                                    <p>Final Project BSIS2.</p>
                                    <ul className="modal-popup__cat"></ul>
                                </div>
                    
                                <a href="https://github.com/trishaolorvida/webapp2-final-project" className="modal-popup__details">Project link</a>
                            </div>
                        </div> {/* end modal */}

                        <div id="modal-03" hidden>
                            <div className="modal-popup">
                                <img src="public/images/portfolio/gallery/g-melody.jpg" alt="" />
                    
                                <div className="modal-popup__desc">
                                    <h5>WebApp2 Laboratories</h5>
                                    <p>WebApp2 Laboratories BSIS2</p>
                                    <ul className="modal-popup__cat"></ul>
                                </div>
                    
                                <a href="https://github.com/trishaolorvida/webapp2-laboratories" className="modal-popup__details">Project link</a>
                            </div>
                        </div> {/* end modal */}

                        <div id="modal-04" hidden>
                            <div className="modal-popup">
                                <img src="public/images/portfolio/gallery/g-pianowink.jpg" alt="" />
                    
                                <div className="modal-popup__desc">
                                    <h5>AppDev1 Midterm Exam</h5>
                                    <p>AppDev1 Midterm Exam BSIS3.</p>
                                    <ul className="modal-popup__cat"></ul>
                                </div>
                    
                                <a href="https://github.com/trishaolorvida/appdev1-midterm-exam" className="modal-popup__details">Project link</a>
                            </div>
                        </div> {/* end modal */}

                    </div> {/* end works-portfolio */}


                    <div className="row testimonials">
                        <div className="column lg-12" data-animate-block>
            
                            <div className="swiper-container testimonial-slider" data-animate-el>
            
                                <div className="swiper-wrapper">

                                    <div className="testimonial-slider__slide swiper-slide">
                                        <div className="testimonial-slider__author">
                                            <img src="public/images/avatars/user-02.jpg" alt="Author image" className="testimonial-slider__avatar" />
                                            <cite className="testimonial-slider__cite">
                                                <strong>Tim Cook</strong>
                                                <span>CEO, Apple</span>
                                            </cite>
                                        </div>
                                        <p>
                                        Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. 
                                        Explicabo a quaerat sint autem dolore ducimus ut consequatur neque.  Nisi dolores quaerat fuga rem nihil nostrum.
                                        Laudantium quia consequatur molestias delectus culpa.
                                        </p>
                                    </div> {/* end testimonial-slider__slide */}
                    
                                    <div className="testimonial-slider__slide swiper-slide">
                                        <div className="testimonial-slider__author">
                                            <img src="public/images/avatars/user-03.jpg" alt="Author image" className="testimonial-slider__avatar" />
                                            <cite className="testimonial-slider__cite">
                                                <strong>Sundar Pichai</strong>
                                                <span>CEO, Google</span>
                                            </cite>
                                        </div>
                                        <p>
                                        Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                                        Nisi eaque consequatur. Voluptatem dignissimos ut ducimus accusantium perspiciatis.
                                        Quasi voluptas eius distinctio. Atque eos maxime.
                                        </p>
                                    </div> {/* end testimonial-slider__slide */}
                    
                                    <div className="testimonial-slider__slide swiper-slide">
                                        <div className="testimonial-slider__author">
                                            <img src="public/images/avatars/user-01.jpg" alt="Author image" className="testimonial-slider__avatar" />
                                            <cite className="testimonial-slider__cite">
                                                <strong>Satya Nadella</strong>
                                                <span>CEO, Microsoft</span>
                                            </cite>
                                        </div>
                                        <p>
                                        Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.  
                                        Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.
                                        Voluptatem dignissimos ut.
                                        </p>
                                    </div> {/* end testimonial-slider__slide */}
            
                                    <div className="testimonial-slider__slide swiper-slide">
                                        <div className="testimonial-slider__author">
                                            <img src="public/images/avatars/user-06.jpg" alt="Author image" className="testimonial-slider__avatar" />
                                            <cite className="testimonial-slider__cite">
                                                <strong>Jeff Bezos</strong>
                                                <span>CEO, Amazon</span>
                                            </cite>
                                        </div>
                                        <p>
                                        Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac augue. Fusce vel dui. In ac felis 
                                        quis tortor malesuada pretium. Curabitur vestibulum aliquam leo. Qui sed at corrupti expedita voluptas odit. 
                                        Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                                        </p>
                                    </div> {/* end testimonial-slider__slide */}
                
                                </div> {/* end swiper-wrapper */}
            
                                <div className="swiper-pagination"></div>
            
                            </div> {/* end swiper-container */}
            
                        </div> {/* end column */}
                    </div> {/* end row testimonials */}

                </section> {/* end s-works */}


                {/* ### contact
                ================================================== */}
                <section id="contact" className="s-contact target-section">
                      <div className="row contact-top">
                          <div className="column lg-12">
                              <h2 className="text-pretitle">Get In Touch</h2>
                              <p className="h1">Contact me.</p>
                          </div>
                      </div> {/* end contact-top */}

                      <div className="row contact-bottom">
                          <div className="column lg-3 md-5 tab-6 stack-on-550 contact-block">
                              <h3 className="text-pretitle">Reach me at</h3>
                              <p className="contact-links">
                                  <a href="mailto:trisha.olorvida0207@gmail.com" className="mailtoui" aria-label="Email Trisha Olorvida">trisha.olorvida0207@gmail.com</a> <br />
                                  <a href="tel:+639561520826" aria-label="Call Trisha Olorvida">+639561520826</a>
                              </p>
                          </div>
                          <div className="column lg-4 md-5 tab-6 stack-on-550 contact-block">
                              <h3 className="text-pretitle">Social</h3>
                              <ul className="contact-social">
                                  <li><a href="https://www.facebook.com/ventipyon" aria-label="Visit Trisha Olorvida's Facebook">Facebook</a></li>
                                  <li><a href="https://www.linkedin.com/in/trisha-olorvida-937913277/" aria-label="Visit Trisha Olorvida's LinkedIn">LinkedIn</a></li>
                                  <li><a href="https://github.com/trishaolorvida" aria-label="Visit Trisha Olorvida's GitHub">Github</a></li>
                              </ul>
                          </div>
                          <div className="column lg-4 md-12 contact-block">
                              <a href="mailto:trisha.olorvida0207@gmail.com" className="mailtoui btn btn--medium u-fullwidth contact-btn" aria-label="Say Hello via Email">Say Hello.</a>
                          </div>
                      </div> {/* end contact-bottom */}
                  </section> {/* end contact */}


            {/* ## footer
            ================================================== */}
            <footer className="s-footer">

                <div className="row">
                    <div className="column ss-copyright">
                        <span>BSIS 3 Olorvida</span> 
                        <span>Design by <a href="https://www.styleshout.com/">StyleShout</a> Distribution By <a href="https://themewagon.com">Themewagon</a></span>
                    </div>

                    <div className="ss-go-top">
                        <a className="smoothscroll" title="Back to Top" href="#top">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
                        </a>
                    </div>
                </div>

            </footer> {/* end s-footer */}

        </div> {/* end -s-pagewrap */}
    </>
  )
}

export default App