import { Form } from "./components/Form.jsx"
import { Header } from "./components/Header.jsx"
import './App.css'

const cardData = [
    {
        "id": 1,
        "image": '../images/avatar-anisha.png',
        "name": 'Anisha Li',
        "description": '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'
    },
    {
        "id": 2,
        "image": '../images/avatar-ali.png',
        "name": 'Ali Bravo',
        "description": '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”'
    },
    {
        "id": 3,
        "image": '../images/avatar-richard.png',
        "name": 'Richard Watts',
        "description": '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”'
    },
    {
        "id": 4,
        "image": '../images/avatar-shanai.png',
        "name": 'Shanai Gough',
        "description": '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”'
    }
]

function App() {

    return (
        <>

            <Header />

            <figure className="absolute inset-0 overflow-hidden pointer-events-none">
                <img className="absolute w-full max-w-3xl -z-10 -top-24 -right-1/4 md:-top-32 md:-right-32" src="../images/bg-tablet-pattern.svg" alt="background image" />
            </figure>

            <section className="flex flex-col justify-center mt-16 gap-y-10 md:gap-x-40 md:flex-row md:wrapper">

                <article className="text-center md:text-start w-[90%] mx-auto grid md:flex md:flex-col gap-y-8 md:basis-full">
                    <h2 className="text-3xl lg:text-4xl px-10 md:px-0 font-bold text-dark-blue">What’s different about Manage?</h2>
                    <p className="text-[16px] md:w-[350px] md:text-base text-black opacity-45">
                        Manage provides all the functionality your team needs, without
                        the complexity. Our software is tailor-made for modern digital
                        product teams.
                    </p>
                </article>

                <article className="grid gap-y-10 md:basis-full">

                    <div className="flex flex-col gap-y-2">
                        <div className="flex gap-x-3 items-center bg-very-palered lg:pl-0 pl-4 md:bg-transparent">
                            <span className="bg-bright-red text-white font-bold px-4 py-1 rounded-full">01</span>
                            <h3 className="font-bold text-dark-blue">Track company-wide progress</h3>
                        </div>
                        <p className="text-[14px] md:text-[15px] text-black opacity-45 px-4 md:pr-0 mt-2 lg:ml-12">
                            See how your day-to-day tasks fit into the wider vision. Go from
                            tracking progress at the milestone level all the way done to the
                            smallest of details. Never lose sight of the bigger picture again.
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <div className="flex gap-x-3 items-center bg-very-palered pl-4 lg:pl-0 md:bg-transparent">
                            <span className="bg-bright-red text-white font-bold px-4 py-1 rounded-full">02</span>
                            <h3 className="font-bold text-dark-blue">Advanced built-in reports</h3>
                        </div>
                        <p className="text-[14px] md:text-[15px] text-black opacity-45 px-4 md:pr-0 mt-2 lg:ml-12">
                            Set internal delivery estimates and track progress toward company
                            goals. Our customisable dashboard helps you build out the reports
                            you need to keep key stakeholders informed.
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <div className="flex gap-x-3 items-center bg-very-palered pl-4 lg:pl-0 md:bg-transparent">
                            <span className="bg-bright-red text-white font-bold px-4 py-1 rounded-full">03</span>
                            <h3 className="font-bold text-dark-blue">Everything you need in one place</h3>
                        </div>
                        <p className="text-[14px] md:text-[15px] text-black opacity-45 px-4 md:px-0 md:pr-0 mt-2 lg:ml-12">
                            Stop jumping from one service to another to communicate, store files,
                            track tasks and share documents. Manage offers an all-in-one team
                            productivity solution.
                        </p>
                    </div>

                </article>

            </section>


            <section className="lg:w-full py-16 lg:w-full w-[90%] mx-auto overflow-hidden">

                <h2 className="mb-20 text-center font-bold text-3xl text-dark-blue">
                    What they’ve said
                </h2>
                <ul className="text-center flex flex-col gap-y-12 md:flex-row md:gap-x-4">
                    {
                        cardData.map(card => (
                            <li key={card.id} className="lg:basis-1/4">
                                <div className="bg-gray-100 py-12 relative rounded-md">
                                    <img className="absolute -top-8 inset-x-[40%] z-10 h-16 w-16" src={card.image} alt="" />
                                    <p className="py-2 font-bold text-xl text-dark-blue">{card.name}</p>
                                    <p className="mt-4 text-[15px] text-black opacity-45 px-4">
                                        {card.description}
                                    </p>
                                </div>
                            </li>
                        ))
                    }
                </ul>

                <div className="flex flex-col items-center justify-center mt-16 md:items-center md:justify-center">
                    <a className="w-3/6 md:max-w-[150px] font-bold bg-bright-red hover:bg-bright-red/90 hover:shadow-bright-red/50 text-center hover:text-very-light-gray text-very-light-gray py-3 px-2 rounded-full shadow-lg" href="#">
                        Get Started
                    </a>
                </div>
            </section>

            <section className="bg-bright-red py-16">
                <article className="w-[90%] md:wrapper mx-auto overflow-hidden py-4 flex flex-col md:flex-row justity-between md:items-center">
                    <h2 className="text-center md:text-start md:max-w-[400px] text-3xl px-10 md:px-0 md:flex-1 font-bold text-white">
                        Simplify how your team works today.
                    </h2>
                    <div className="flex flex-col items-center justify-center mt-12 md:mt-0 md:items-end md:justify-center md:flex-1">
                        <a className="w-3/6 md:max-w-[150px] font-bold bg-white hover:bg-gray-100 hover:shadow-gray-100/20 text-center hover:text-bright-red text-bright-red py-3 px-2 rounded-full shadow-lg" href="#">
                            Get Started
                        </a>
                    </div>
                </article>
            </section>

            <footer className="bg-very-dark-blue p-8">
                <div className="wrapper w-full grid justity-center md:justify-start md:grid-cols-4 md:grid-rows-2">

                    <Form />

                    <div className="flex justify-around py-10 md:row-start-1 md:row-span-2 md:col-start-2 md:col-span-2">
                        <div className="flex flex-col gap-y-4">
                            <a href="#" className="text-very-light-gray text-sm hover:cursor-pointer hover:text-bright-red">
                                Home
                            </a>
                            <a href="#" className="text-very-light-gray text-sm hover:text-bright-red">
                                Pricing
                            </a>
                            <a href="#" className="text-very-light-gray text-sm hover:text-bright-red">
                                className
                            </a>
                            <a href="#" className="text-very-light-gray text-sm hover:text-bright-red">
                                About Us
                            </a>
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <a href="#" className="text-very-light-gray text-sm hover:text-bright-red">
                                Careers
                            </a>
                            <a href="#" className="text-very-light-gray text-sm hover:text-bright-red">
                                Community
                            </a>
                            <a href="#" className="text-very-light-gray text-sm hover:text-bright-red">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div className="w-full p-4 md:p-0 md:ml-0 flex flex-items justify-between gap-x-4 md:row-start-2 md:row-span-1 md:col-start-1">
                        <a href="#" className="h-8 w-8 text-center">
                            <img className="w-full" src="../images/icon-facebook.svg" alt="icon facebook" />
                        </a>
                        <a href="#" className="h-8 w-8 text-center">
                            <img className="w-full" src="../images/icon-youtube.svg" alt="icon youtube" />
                        </a>
                        <a href="#" className="h-8 w-8 text-center">
                            <img className="h-full w-full" src="../images/icon-twitter.svg" alt="icon twitter" />
                        </a>
                        <a href="#" className="h-8 w-8 text-center">
                            <img className="h-full w-full" src="../images/icon-pinterest.svg" alt="icon pinterest" />
                        </a>
                        <a href="#" className="h-8 w-8 text-center">
                            <img className="w-full" src="../images/icon-instagram.svg" alt="icon instagram" />
                        </a>
                    </div>

                    <div className="mx-auto py-6 md:ml-0 md:col-span-1 md:row-start-1">
                        <img className="" src="../images/logo-white.svg" alt="logo" />
                    </div>

                    <p className="text-center text-sm text-very-light-gray/30 md:row-start-2 md:row-span-1 md:col-start-4 md:mt-10">
                        Copyright 2020. All Rights Reserved
                    </p>
                </div>
            </footer>
        </>
    )
}

export default App
