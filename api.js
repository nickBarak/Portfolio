const overviews = {
    Home: 
        `I recently graduated from the University of California, Santa Barbara with a degree in Economics & Accounting. I am now pursuing a professional position as a software developer. I have self-studied coding rigorously throughout the later portion of my time in college and am prepared for a position in web development - though I am open to and interested in exploring other facets of the industry if needed.`,
    Apps:
        `In order to demonstrate the breadth of my abilities, I am showcasing two projects employing alternative rendering paradigms. The first is a server-side rendered multi-page application and a clone of the website for the student-run newspaper at my university. The second is a client-side rendered single-page application and is an information, recommendation and management service for movies. Additionally, I have included a simple color-matching game.`,
    Skills:
        `I pride myself on my ability to bring a full project to completion from start to finish. As such, I have developed skills in both client- and server-side environments. These include a strong familiarity with the fundamental web technologies and industry tooling as well as knowledge and experience with things like routing, API development and database management. Much of my current workflow revolves around the React library.`,
    Appendix: 'See technical details'
}

const pageContent = {
    Home: [''],
    Apps: [
        `<div class="app-container">
            <div class="app" data-key="0" style="transition: transform 350ms ease-in-out, max-height 500ms ease-in-out">
                <img src="/img/apps/mock_nexus.png" onmouseout="this.style.borderColor = 'black'">
                <label data-app-name="Mock Nexus">Mock Nexus</label>
            </div>
            <div class="app" data-key="1" style="transition: transform 350ms ease-in-out, max-height 500ms ease-in-out">
                <img src="/img/apps/choosie.png" onmouseout="this.style.borderColor = 'black'">
                <label data-app-name="Choosie">Choosie<label>
            </div>
            <div class="app" data-key="2" style="transition: transform 350ms ease-in-out, max-height 500ms ease-in-out">
                <img src="/img/apps/square_match.png" onmouseout="this.style.borderColor = 'black'">
                <label data-app-name="Square Match">Square Match<label>
            </div>

            <div class="app-info-container" style="transition: transform 350ms ease-in">
                <div class="app-info">
                    <strong style="color: #555">Mock Nexus</strong>
                    <p>
                        This clone of the UCSB newspaper site includes over 8000 articles from 1000 authors in 9 categories and 48 subcategories. The home page includes a navigation bar for each of the categories and subcategories as well as 6 about pages and a search tool, a headlines section, a sidebar of recent activity and previews of the most recent articles in every category. Each page of the application also includes a footer navigation bar with links to several about pages as well as the home page.
                    </p>
                    <p>
                        Visiting a category or subcategory page will display the name of the category or subcategory and previews for all articles in that category or subcategory ordered by recency of publish date. 15 article previews are displayed on a page at a time and categories and subcategories with more than 15 articles will include a pagination tool at the bottom of the page. This pattern is also used for author pages. Clicking on an author's name anywhere in the application will take you to his or her page.
                    </p>
                    <p>
                        Each article page is headed by the name of the subcategory to which it was published, the title of the article, the publish date and the name of the author. The content of the article falls directly below and will often include various images. The content is rendered as dummy data but is based on real data scraped from the official site. Below the content you will find the words 'Share this: ' followed by icons for various social media platforms. After this is an "About the Author" section, containing an image, the author's name and his or her biography if one is available - again, as dummy data. After this segment is a list of related articles - each with a title and representative category.
                    </p>
                    <p>
                        Finally, at the bottom of the page is a comment section. At the top of this section is a form with inputs for your comment, name and email, the latter two of which will not appear if you have already signed in. Signing in here will create a new user if necessary. Clicking the bell icon will subscribe or unsubscribe your email to or from the article's comment activity. An array of icons containing information about the comments of the article or its followers sits below. The two colored icons are interactive and can be activated with a click to view specific comments. A list of comments is the last thing in the section, with each reply shorter than its parent. Clicking the reply button on a comment will open or close a form much like that at the top of the comment section. Clicking the chevron icon will show or hide all comments deeper in the thread.
                    </p>
                    <p>
                        At the right end of the header navigation bar is a magnifying glass icon which opens an input box when clicked. Entering a value here will initiate a search request, disable everything on the screen and open an interactive modal. Article previews for the results of the search will be displayed in the modal with an option to sort by relevance or publish date. A pagination tool will also be displayed at the bottom of the modal if necessary.
                    </p>
                    <p>
                        An alternative layout will be rendered under certain screen widths - most notably regarding those fitting mobile devices. In these screen widths, the header, sidebar and footer will no longer appear. Descriptions will often not be shown in article previews and images will generally be stacked or removed. A new sticky header with a hamburger menu icon will be displayed at the top of the viewport. Clicking this icon will slide in a new navigation tool with dropdown options for all items present in the original nav. Clicking the 'X' icon in the top right of this nav will close it and restore the scroll position at the time of its opening. Using the search tool in this nav will redirect the user to a dedicated search page similar to that of a category, subcategory or author.
                    </p>
                    ${1?'':`<p>
                        This clone of the UCSB newspaper site employs the Next.js framework to achieve server-side rendering as a React application. The app comprises routes "/categories," "/articles," "/authors" and "/about," with the "/categories" route extending into a "/subcategories" subroute. Pages in the "/categories" and "/authors" routes (as well as the "/subcategories" subroute) also include a "/page" subroute. The "/categories," "/articles" and "/authors" routes and all "/page" and "/subcategories" subroutes extend dynamically, with "/articles" and "/authors" including an [id] parameter and the others being self-explanatory. The use of Next.js' 'getStaticProps' and 'getStaticPaths' functions enabled application-wide pre-rendering of HTML, even among dynamic routes, ensuring miniscule load-times for all user-navigation.
                    </p>
                    <p>
                        The database operates through an AWS EC2 server and the site is deployed through Netlify. The application utilizes a small internal API (via the "/api" route) to manage user/article comments and 'following' statuses. The clone was designed to resemble the model (dailynexus.com) as closely as possible in every aspect with the exception of the implementation of a responsive design in the clone. The presentational data for the site was collected by employing the Scrapy Python framework to develop a spider and crawl through dailynexus.com extensively.
                    </p>`}

                    <div class="button-container" style="display:flex; justify-content: center;">
                        <button class="button" onclick="openURL('https://nickbarak.me/mock-nexus')">Live Demo</button>
                        <button class="button" onclick="openURL('https://dailynexus.com')">Model Site</button>
                        <button class="button" onclick="openURL('https://github.com/nickBarak/Mock_Nexus-Generic')">Code (App)</button>
                        <button class="button" onclick="openURL('https://github.com/nickBarak/Nexus_Data_Crawler')">Code (Spider)</button>
                    </div>
                </div>

                <div class="app-info">
                    <strong>Choosie</strong>

                    <p>
                        This application offers a truly 'app-like' experience and was designed with the concept of a mobile app in mind. Characteristic of this ambition are its smooth transitions, visually soft components and simplistic interface. The app opens to a search bar and three buttons labeled 'My List,' 'Start' and 'Popular.' Entering a search will open a search page showing the value entered, a star-rating component, another search bar and a list of 10 or less movies matching the search. The word 'Next' will appear both above and below this list if the search yields more than 10 results, and a click on a 'Next' button will display the next set and reveal an option to view the previous one. A navigation bar is also visible with options to return home or visit the 'My List' and 'Popular' pages.
                    </p>
                    <p>
                        Clicking on the image or text of one of the results on the search page will open a movie page where its information can be observed. A 'Back' option will appear in the navigation bar which will return the user to the search page with the search value and result set restored. Below the title of the movie on the movie page sits a button reading either 'Sign in to save this movie' or 'Save to My List' depending on the status of the user. If not signed in, clicking this button will redirect the user to the registration page. Otherwise, the movie will be added to the user's collection of saved movies which can be observed from the 'My List' page. The button will then read 'Unsave movie,' and clicking it will remove the movie from the user's collection.
                    </p>
                    <p>
                        At the top left of the home page is a button to log in. Clicking this will open input boxes for entering credentials as well as an option to sign up. Clicking the 'Sign up' button will take the user to a register page. A user can sign in from this page as well, or and be prompted to enter further information afterwords. When signed in, the 'Log in' button on the home page is replaced with a greeting as well as buttons to log out or view the user's profile. The profile page includes a summary of the user's settings as well options to change them. At the bottom left of the home page are the words 'What is Choosie?.' This is a link to the help page where information about the application is provided.
                    </p>
                    <p>
                        Selecting the 'My List' option from the home screen or navigation bar will, if signed in, reveal all of the user's currently saved movies. Hovering over the movie's image will - if the user's settings allow - display a brief description, and clicking the 'Unsave' button beneath it will remove it from the user's currently saved movies as well as any bins which contain it. Unsaved movies can still be viewed by clicking 'Save History' on the 'My List' page, however, unless the user opts to clear his or her history in the profile page.
                    </p>
                        your bins
                        manage bins
                        filter
                    </p>
                    <p>
                        popular
                    </p>
                    <p>
                        query
                    </p> 
                




                        The navigation system is designed such that a user can easily transition to almost any part of the application from every part of the application - excluding the additional routes, which have access to the home page alone.
                        
                        
                        
                       ${1?'':`It is a client-side rendered single-page application built with the React and React-DOM libraries and makes use of the React-Router-DOM library to incorporate a client-side routing mechanism. Its core routes include "/query", "/popular", "/my-list", "/search" and "/movies", none of which extend further, aside from the "/movies" route extending dynamically to accept an [id] parameter. Additional routes include "/help", "/register" and "/profile" (the last of which extends to accept a [username] parameter). The navigation system is designed such that a user can easily transition to almost any part of the application from every part of the application - excluding the additional routes, which have access to the index page alone.`}
                    </p>
                    
                    <p>
                        Talk about: Redux...
                                    AWS EC2 Database Server
                                    Netlify Client Deployment
                                    Heroku Server/API Deployment
                                    IMDB Web Crawler
                                    Passport.js Authentication
                    </p>

                    <div class="button-container" style="display:flex; justify-content: center;">
                        <button class="button" onclick="openURL('https://choosie.us')">Live Demo</button>
                        <button class="button" onclick="openURL('https://github.com/nickBarak/Choosie-React')">Code (Client)</button>
                        <button class="button" onclick="openURL('https://github.com/nickBarak/Choosie-Server')">Code (Server)</button>
                        <button class="button" onclick="openURL('https://github.com/nickBarak/Movie_Data_Crawler')">Code (Spider)</button>
                    </div>
                </div>
                
                <div class="app-info">
                
                    <strong>Square Match</strong>

                    <p>
                        This light-weight game application will test your hand-eye-coordination and response time. The game offers two modes of play: one based on clicking (or tapping on a mobile device) and one based on tracing your mouse cursor. A giant square grid filled with 16 smaller squares sits in the middle of the page, with each small square containing the number 16. After initializing the game by either clicking or tracing over a square, the board will begin to change colors and resolve with a relatively even distribution of six distinct colors. At this point, you can begin to manipulate the squares individually. Continuing to click on or trace over squares will cause them to change color again at random.
                    </p>
                    <p>
                        The objective of the game is to manipulate the colors of the squares until all 16 squares are the same color. The number in the middle of each square represents the minimum number of squares that still must be converted in order to win the game. Every square will always contain the same number as the other squares, and this number can also be observed after the words 'Squares Remaining: ' below the grid. After completing the game, a victory menu will appear reporting your time as well as your fastest recorded time on that device and browser. The reset button will refresh the page and the 'Toggle: ' options allow you to transition between game modes.
                    </p>

                    <div style="display:flex;">
                        <button class="button" onclick="openURL('https://squarematch.xyz')">Live Demo</button>
                        <button class="button" onclick="openURL('https://github.com/nickBarak/Square_Match')">Code</button>
                    </div>
                </div>
            </div>
        </div>`
    ],
    Skills: [`<div class="skills-container" style="display: flex; justify-content: space-around; align-items: center; margin-top: 7rem; margin-bottom: 2.5rem; max-width: 100rem;">
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
                <td>HTML/<wbr>CSS/<wbr>SASS</td>
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
                <td>Cache Storage</td>
                <td>Redis</td>
            </tr>
            <tr class="skill">
                <td>Authentication</td>
                <td>Express-Session/<wbr>Cookies</td>
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