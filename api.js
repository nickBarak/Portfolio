const overviews = {
    Home: 
        `I recently graduated from the University of California, Santa Barbara with a degree in Economics & Accounting. I am now pursuing a professional position as a software developer. I have self-studied coding rigorously throughout the later portion of my time in college and am prepared for a position in web development - though I am open to and interested in exploring other facets of the industry if needed.`,
    Apps:
        `In order to demonstrate the breadth of my abilities, I am showcasing two projects employing alternative rendering paradigms. The first is a server-side rendered multi-page application and a clone of the website for the student-run newspaper at my university. The second is a client-side rendered single-page application and is an information, recommendation and management service for movies.`,
    Skills:
        `I pride myself on my ability to bring a full project to completion from start to finish. As such, I have developed skills in both client- and server-side environments. These include a strong familiarity with the fundamental web technologies and industry tooling as well as knowledge and experience with things like routing, API development and database management. Much of my current workflow revolves around the React library.`,
    Appendix: 'Appendix Page'
}

const pageContent = {
    Home: [''],
    Apps: [
        `<div class="app-container">
            <div class="app" data-key="0">
                <img src="/img/apps/mock_nexus.png" onclick="showAppDetails(0)">
                <label onclick="showAppDetails(0)">Mock Nexus</label>
            </div>
            <div class="app" data-key="1">
                <img src="/img/apps/choosie.png" onclick="showAppDetails(1)">
                <label onclick="showAppDetails(1)">Choosie<label>
            </div>
            <div class="app" data-key="2">
                <img src="/img/apps/square_match.png" onclick="showAppDetails(2)">
                <label onclick="showAppDetails(2)">Square Match<label>
            </div>
        </div>`,
        
        [
        `<div class="app-info">
            <strong style="color: #555">Mock Nexus</strong>
            <p>
                This clone of the UCSB newspaper site employs the Next.js framework to achieve server-side rendering as a React application. The app comprises routes "/categories," "/articles," "/authors" and "/about," with the "/categories" route extending into a "/subcategories" subroute. Pages in the "/categories" and "/authors" routes (as well as the "/subcategories" subroute) also include a "/page" subroute. The "/categories," "/articles" and "/authors" routes and all "/page" and "/subcategories" subroutes extend dynamically, with "/articles" and "/authors" including an [id] parameter and the others being self-explanatory. The use of Next.js' 'getStaticProps' and 'getStaticPaths' functions enabled application-wide pre-rendering of HTML, even among dynamic routes, ensuring miniscule load-times for all user-navigation.
            </p>
            <p>
                The database operates through an AWS EC2 server and the site is deployed through Netlify. The application utilizes a small internal API (via the "/api" route) to manage user/article comments and 'following' statuses. The clone was designed to resemble the model (dailynexus.com) as closely as possible in every aspect with the exception of the implementation of a responsive design in the clone. The presentational data for the site was collected by employing the Scrapy Python framework to develop a spider and crawl through dailynexus.com extensively.
            </p>

            <div style="display:flex">
                <button class="button" onclick="openURL('https://mocknexus.com')">Live Demo</button>
                <button class="button" onclick="openURL('https://dailynexus.com')">Model Site</button>
                <button class="button" onclick="openURL('https://github.com/nickBarak/Mock_Nexus-Generic')">Code (App)</button>
                <button class="button" onclick="openURL('https://github.com/nickBarak/Nexus_Data_Crawler')">Code (Spider)</button>
            </div>
        </div>`,

        `<div class="app-info">
            <strong>Choosie</strong>

            <p>
                This application offers a truly 'app-like' experience and was designed with the concept of a mobile app in mind. Characteristic of this ambition are its smooth transitions, visually soft components and simplistic interface. It is a client-side rendered single-page application built with the React and React-DOM libraries and makes use of the React-Router-DOM library to incorporate a client-side routing mechanism. Its core routes include "/query", "/popular", "/my-list", "/search" and "/movies", none of which extend further, aside from the "/movies" route extending dynamically to accept an [id] parameter. Additional routes include "/help", "/register" and "/profile" (the last of which extends to accept a [username] parameter). The navigation system is designed such that a user can easily transition to almost any part of the application from every part of the application - excluding the additional routes, which have access to the index page alone.
            </p>
            
            <p>
                Talk about: Redux...
                            AWS EC2 Database Server
                            Netlify Client Deployment
                            Heroku Server/API Deployment
                            IMDB Web Crawler
                            Passport.js Authentication
            </p>

            <div style="display:flex">
                <button class="button" onclick="openURL('https://choosie.us')">Live Demo</button>
                <button class="button" onclick="openURL('https://github.com/nickBarak/Choosie-React')">Code (Client)</button>
                <button class="button" onclick="openURL('https://github.com/nickBarak/Choosie-Server')">Code (Server)</button>
                <button class="button" onclick="openURL('https://github.com/nickBarak/Movie_Data_Crawler')">Code (Spider)</button>
            </div>
        </div>`
    ]],
    Skills: [`<div class="skills-container" style="display: flex; justify-content: space-around; align-items: center; margin-top: 5rem;max-width: 100rem;">
        <table class="skills-list">
        <tbody>
            <tr>
                <th>Skill</th>
                <th>Tooling</th>
            </tr>
            <tr class="skill">
                <td>Multi-Paradigm Programming</td>
                <td>JavaScript/<wbr>Node, Python</td>
            </tr>
            <tr class="skill">
                <td>Core Web Technologies</td>
                <td>HTML/<wbr>CSS</td>
            </tr>
            <tr class="skill">
                <td>CSS Pre-Processing</td>
                <td>SASS/<wbr>SCSS</td>
            </tr>
            <tr class="skill">
                <td>Client-Side Rendering (SPA)</td>
                <td>React</td>
            </tr>
            <tr class="skill">
                <td>Server-Side Rendering (MPA)</td>
                <td>Next, Express/<wbr>EJS</td>
            </tr>
            <tr class="skill">
                <td>State Management</td>
                <td>Redux</td>
            </tr>
            <tr class="skill">
                <td>SQL Database Management</td>
                <td>PostgreSQL</td>
            </tr>
            <tr class="skill">
                <td>NoSQL Database Management</td>
                <td>MongoDB</td>
            </tr>
            <tr class="skill">
                <td>Authentication</td>
                <td>Sessions/<wbr>Cookies/<wbr>Tokens</td>
            </tr>
        </tbody>
        </table>
        <table class="skills-list">
        <tbody>
            <tr>
                <th>Skill</th>
                <th>Tooling</th>
            </tr>
            <tr class="skill">
                <td>API Development/<wbr>Client-Server Communication</td>
                <td>REST Protocol/<wbr>JavaScript Fetch API</td>
            </tr>
            <tr class="skill">
                <td>Client-Side Routing</td>
                <td>React-Router-DOM</td>
            </tr>
            <tr class="skill">
                <td>Server-Side Routing</td>
                <td>Express, Next</td>
            </tr>
            <tr class="skill">
                <td>Version Control</td>
                <td>Git/<wbr>GitHub</td>
            </tr>
            <tr class="skill">
                <td>Static Hosting</td>
                <td>Netlify</td>
            </td>
            <tr class="skill">
                <td>Cloud Platform Management</td>
                <td>Heroku</td>
            </tr>
            <tr class="skill">
                <td>DNS Configuration</td>
                <td>Namecheap</td>
            </tr>
            <tr class="skill">
                <td>Web-Scraping/<wbr>Crawling</td>
                <td>Scrapy</td>
            </tr>
            <tr class="skill">
                <td>Machine Learning</td>
                <td>Keras/<wbr>Tensorflow</td>
            </tr>
        </tbody>
        </table>
        </tbody>
        </table>
    </div>`],
    Appendix: [
        { Choosie: [
            [
                'Database',
                `<p>
                    The structure of the PostgreSQL database designed for this application can be observed below.
                </p>
                
                <table>
                <tr>
                    <th>movie_data</th>
                    <td>id ([PK] integer)</td>
                    <td>src_url (character varying)</td>
                    <td>genres (character varying[])</td>
                    <td>mpaa_rating (character_varying)</td>
                    <td>directors (character varying[])</td>
                    <td>writers (character varying[])</td>
                    <td>actors (character varying[])</td>
                    <td>release_date (date)</td>
                    <td>duration_in_mins (integer)</td>
                    <td>countries (character varying[])</td>
                    <td>languages (character varying[])</td>
                    <td>description (character varying)</td>
                    <td>times_saved (integer)</td>
                    <td>times_saved_this_month (integer)</td>
                </tr>
                <tr>
                    <th>users</th>
                    <td>name (character varying)</td>
                    <td>email (character varying)</td>
                    <td>username ([PK] character varying)</td>
                    <td>password (character varying)</td>
                    <td>age (integer)</td>
                    <td>sex (character varying)</td>
                    <td>bins (jsonb)</td>
                    <td>languages (character varying[])</td>
                    <td>avg_session_length_in_mins (numeric)</td>
                    <td>start_clicks (integer)</td>
                    <td>my_list_clicks (integer)</td>
                    <td>popular_clicks (integer)</td>
                    <td>avg_search_rating (numeric)</td>
                    <td>search_history (character varying[])</td>
                    <td>currently_saved (integer[])</td>
                    <td>unsaved (integer[])</td>
                    <td>session_lengths_in_mins (numeric[])</td>
                    <td>show_save_history (boolean)</td>
                    <td>recent_save_history (integer[])</td>
                    <td>show_description_on_hover (boolean)</td>
                    <td>genre_selection (jsonb)</td>
                </tr>
            </table>`
            ]
            [
                'Store',
                `<p>
                    redux...
                </p>`
            ],
            [
                'Spider',
                ``
            ],
            [
                'Complex Data Structures',
                ``
            ]
        ]},
        { 'Mock Nexus': [
            [
                'Database',
                `<p> The application utilizes a PostgreSQL database architectured as follows: </p>
            
                <table>
                    <tr>
                        <th>categories</th>
                        <td>title ([PK] character varying)</td>
                        <td>articles (integer[])</td>
                        <td>subcategories (jsonb)</td>
                    </tr>
                    <tr>
                        <th>articles</th>
                        <td>title (character varying)</td>
                        <td>category (character varying)</td>
                        <td>subcategory (character varying)</td>
                        <td>publish_date (date)</td>
                        <td>full_thumbnail (character varying)</td>
                        <td>mobile_thumbnail (character varying)</td>
                        <td>description (character varying)</td>
                        <td>content (character varying)</td>
                        <td>src_url (character varying)</td>
                        <td>id ([PK] integer)</td>
                        <td>author (character varying)</td>
                        <td>related (integer[])</td>
                        <td>comments (jsonb[])</td>
                        <td>followers (character varying[])</td>
                    </tr>
                    <tr>
                        <th>authors</th>
                        <td>id ([PK] integer)</td>
                        <td>name (character varying)</td>
                        <td>biography (character varying)</td>
                        <td>articles (integer[])</td>
                        <td>portrait (character varying)</td>
                    </tr>
                    <tr>
                        <th>users</th>
                        <td>name (character varying)</td>
                        <td>email ([PK] character varying)</td>
                        <td>comments (jsonb[])</td>
                        <td>following (integer[])</td>
                    </tr>
                    <tr>
                        <th>traffic</th>
                        <td>...columns for each category</td>
                        <td>and subcategory tracking visits</td>
                        <td>(visiting subcategory page also</td>
                        <td>increments respective category)</td>
                    </tr>
                </table>`
            ]
            [
                'Spider',
                ``
            ],
            [
                'Complex Data Structures',
                ``
            ],
            [
                'Labyrinth',
                ``
            ]
        ]}
    ]
}