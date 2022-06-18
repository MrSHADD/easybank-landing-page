import React from "react";

export default function Main(){
    return(
        <main className="main">
            <section className="section1">
              <div className="intro">
                <h1 className="next-gen"> Next generation digital banking</h1>
                <p className="para">Take your financial life online. Your Easybank account will be a one-stop-shop 
                    for spending, saving, budgeting, investing, and much more.
                </p>
                <button className="btn-req">Request Invite</button>
                
              </div>
              <div className="div-img-bg">
                 <img src="./images/bg-intro-desktop.svg" className="img-bg"/>
                 <img src="./images/image-mockups.png" className="mockups"/>
              </div>
            </section>
            <section className="section2">
                <div className="reasons">
                    <h1 className="why-choose">Why choose Easybank?</h1>
                    <p className="para2">We leverage Open Banking to turn your bank account into your financial hub. Control 
                            your finances like never before.
                    </p>
                </div>
                <div className="reasons-list">
                    <div>
                        <img src="./images/icon-online.svg" className=""/>
                        <h3>Online Banking</h3>
                        <p>
                            Our modern web and mobile applications allow you to keep track of your finances 
                            wherever you are in the world.
                        </p>
                    </div>

                    <div>
                        <img src="./images/icon-budgeting.svg" className=""/>
                        <h3>Simple Budgeting</h3>
                        <p>
                            See exactly where your money goes each month. Receive notifications when you’re 
                            close to hitting your limits.
                        </p>
                    </div>
                    <div>
                        <img src="./images/icon-onboarding.svg" className=""/>
                        <h3>Fast Onboarding</h3>
                        <p>
                            We don’t do branches. Open your account in minutes online and start taking control 
                            of your finances right away.
                        </p>
                    </div>
                    <div>
                        <img src="./images/icon-api.svg" className=""/>
                        <h3> Open API</h3>
                        <p>
                            Manage your savings, investments, pension, and much more from one account. Tracking 
                            your money has never been easier.
                        </p>
                    </div>
                </div>
            </section>
            <section className="section3">
                <div className="reasons">
                   <h1 className="why-choose">Latest Articles</h1>
                </div>
                <div className="latest-articles-contents">
                    <div className="articles">
                        <img src="./images/image-currency.jpg" className="img-currency"/>
                        <h5>By Claire Robinson</h5>
                        <h3>Receive money in any currency with no fees</h3>
                        <p>
                            The world is getting smaller and we’re becoming more mobile. So why should you be 
                            forced to only receive money in a single …
                        </p>
                    </div>
                    <div className="articles">
                        <img src="./images/image-restaurant.jpg" className="img-currency"/>
                        <h5>By Wilson Hutton</h5>
                        <h3> Treat yourself without worrying about money</h3>
                        <p>
                            Our simple budgeting feature allows you to separate out your spending and set 
                            realistic limits each month. That means you …
                        </p>
                    </div>
                    <div className="articles">
                        <img src="./images/image-plane.jpg" className="img-currency"/>
                        <h5>By Wilson Hutton</h5>
                        <h3>Take your Easybank card wherever you go</h3>
                        <p>
                            We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                            while you’re abroad. We’ll even show you …              
                        </p>
                    </div>
                    <div className="articles">
                        <img src="./images/image-confetti.jpg" className="img-currency"/>
                        <h5>By Claire Robinson</h5>
                        <h3>Our invite-only Beta accounts are now live!</h3>
                        <p>
                            After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                            It’s easy to request an invite through the site ...
                        </p>
                    </div>
                </div>    
            </section>
        </main>
    )
}