//this is my libary because i was unlear about how to initialize a single method i decided to export the whole thing. plus its super satisfying to use . notation in javascript!!
export function createNavBar(pageActive){
let template=null;
let about =`
    <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">Event Registration</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="status.html">Status</a></li>
            <li class="active"><a href="about.html">About</a></li>
        </ul>
        </div>
        <!--/.nav-collapse -->
    </div>
    </nav>
`;

let status=`
    <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">Event Registration</a>
    </div>
    <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
        <li><a href="/">Home</a></li>
        <li class="active"><a href="status.html">Status</a></li>
        <li><a href="about.html">About</a></li>
        </ul>
    </div>
    <!--/.nav-collapse -->
    </div>
    </nav>
`

let home=`
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Event Registration</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
            <li class="active"><a href="/">Home</a></li>
            <li><a href="status.html">Status</a></li>
            <li><a href="about.html">About</a></li>
            </ul>
        </div>
        <!--/.nav-collapse -->
        </div>
    </nav>
`
switch(pageActive){
    case "home":
        template=home;
        break;
    case"about":
        tempate=about;
        break;
    case"status":
        template=="status";
        break;
    }
return template;
// the above is super inneficient for future code. so im going to try to do it another way. here we go ^.^ the above are just used as notes for myself. 

}

export function createNavBarTwo(){
    
return`
<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">Event Registration</a>
    </div>
    <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
        <li id="home"><a href="/">Home</a></li>
        <li id="status"><a href="status.html">Status</a></li>
        <li id="about"><a href="about.html">About</a></li>
        </ul>
    </div>
    <!--/.nav-collapse -->
    </div>
</nav>
`
//.appendclass active on one of these
}
