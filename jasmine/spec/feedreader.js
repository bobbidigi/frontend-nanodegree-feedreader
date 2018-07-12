/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // loops through each feed and ensures it has a URL defined
        //  and that the URL is not empty
        it('url defined', function(){
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        // loops through each feed and ensures it has a name defined
        // and that the name is not empty.
        it('name defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function () {
        // ensures the menu element is hidden by default.

        it('is hidden', function(){     
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

        // visibility when the menu icon is clicked
        // and hidden when clicked again.
        it('icon on click', function(){
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toEqual(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
    });

    // TODO: Write a new test suite named "Initial Entries" 
    // TODO: Write a test that ensures when the loadFeed 
    // there is at least a single .entry element within the.feed container.
    describe('Initial Entries', function(){
        //the use of Jasmine's beforeEach and asynchronous done() function.
        beforeEach(function(done){
            loadFeed (0, function(){
                done();
            });
        });

        it('has entries', function(){
            //retrieves nodelist
            let feed = document.querySelectorAll('.feed a');
            expect($('.entry .feed')).toBeDefined();
            //nodelist greater than 0
            expect(feed.length).toBeGreaterThan(0);
        });

    });
 
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        let entries0;
        let entries1;
        //the use of Jasmine's beforeEach and asynchronous done() function.
        //ensures when a new feed is loaded by the loadFeed
        beforeEach(function(done){
            loadFeed(0, function(){
                //nodlist
                entries0 = document.querySelectorAll('.feed a');
                //first el in nodelist get href
                entries0 = entries0[0].getAttribute('href');
                console.log(entries0);
                 
                loadFeed(1, function () {
                    //nodelist
                    entries1 = document.querySelectorAll('.feed a');
                    //first el in nodelist get href
                    entries1 = entries1[0].getAttribute('href');
                    console.log(entries1);
                    done();
                });

            });
  
        });

        // the content actually changes
        it('is new', function(){
            expect(entries0).not.toBe(entries1);
        });

    });    
}());
