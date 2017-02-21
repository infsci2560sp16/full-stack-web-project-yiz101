/* main js file */

var RED = "#FF6666",
    GREEN = "#99FFCC";

$(function() {
    var isLogin = false;

    $(".page-scroll-share").on("click", function(e) {
        var onClickText = e.currentTarget.innerText;
        console.log(onClickText);
        $.getJSON("/checkLogin", function(data) {
            console.log(data);
            // window.location = '/index';
            if (data.hasOwnProperty('user'))
                isLogin = data.user.status;
            if (isLogin) {
                $.getJSON("/stories", { "text": onClickText }, function(data) {
                    console.log(data);
                    window.location = "/addStories";
                });
            } else {
                window.location = "editNotes.html";
            }
        });
    });

    $(".page-scroll-stories").on("click", function(e) {
        var onClickText = e.currentTarget.innerText;
        console.log(onClickText);
        $.getJSON("/checkLogin", function(data) {
            console.log(data);
            // window.location = '/index';
            if (data.hasOwnProperty('user'))
                isLogin = data.user.status;
            if (isLogin) {
                $.getJSON("/stories", { "text": onClickText }, function(data) {
                    console.log(data);
                    window.location = "/addStories";
                });
            } else {
                window.location = "travelNotes.html";
            }
        });
    });

    $(".page-scroll-des").on("click", function(e) {
        var onClickText = e.currentTarget.innerText;
        console.log(onClickText);
        $.getJSON("/checkLogin", function(data) {
            console.log(data);
            // window.location = '/index';
            if (data.hasOwnProperty('user'))
                isLogin = data.user.status;
            if (isLogin) {
                $.getJSON("/stories", { "text": onClickText }, function(data) {
                    console.log(data);
                    window.location = "/addStories";
                });
            } else {
                window.location = "destination.html";
            }
        });
    });

    $("#btn-goDestinationPage").click(function() {
        var onClickText = "Destination";
        $.getJSON("/checkLogin", function(data) {
            if (data.hasOwnProperty('user'))
                isLogin = data.user.status;
            if (isLogin) {
                $.getJSON("/stories", { "text": onClickText }, function(data) {
                    console.log(data);
                    window.location = "/addStories";
                });
            } else {
                window.location = "views/destination.html";
            }
        });
    });

    $(".navbar-brand").on("click", function() {
        $.getJSON("/checkLogin", function(data) {
            console.log(data);
            // window.location = '/index';
            if (data.hasOwnProperty('user'))
                isLogin = data.user.status;
            if (isLogin) {
                window.location = '/index';
            } else {
                window.location = "../index.html";
            }
        });
    });

    $("#signup-inputEmail").click(function() {
        var email = $("#signup-inputEmail").val();
        inputValidateEmail(email);
    });
    $("#signup-inputUserName").click(function() {
        var email = $("#signup-inputEmail").val();
        inputValidateEmail(email);
    });
    $("#inputPassword1").click(function() {
        var email = $("#signup-inputEmail").val();
        var name = $("#signup-inputUserName").val();
        inputValidateEmail(email);
        inputValidateUserName(name);
    });
    $("#inputPassword2").click(function() {
        var email = $("#signup-inputEmail").val();
        var name = $("#signup-inputUserName").val();
        var pwd1 = $("#inputPassword1").val();
        inputValidateEmail(email);
        inputValidateUserName(name);
        inputValidatePwd1(pwd1);
    });
});

function signin() {
    var email = $("#inputEmail").val(),
        password = $("#inputPassword").val();
    // validate email and password.
    if (correctEmail(email) && correctPassword(password)) {
        var status = true;
        $.getJSON("/signin", { "email": email, "password": password, "status": status }, function(data) {
            console.log(data);
            if (data.status) {
                window.location = '/index';
            }
        });
    }
}

function signup() {
    var email = $("#signup-inputEmail").val(),
        password1 = $("#inputPassword1").val(),
        password2 = $("#inputPassword2").val(),
        name = $("#signup-inputUserName").val();
    var status = true;
    var v = inputValidation(email, name, password1, password2);
    if (v.validEmail && v.validName && v.validPwd1 && v.validPwd2) {
        var data = {
            email: email,
            name: name,
            password: password1,
            status: status
        };
        $.ajax({
            type: "POST",
            url: "/signup",
            data: data,
            success: function(user, textStatus, jqXHR) {
                if (user.hasOwnProperty("notExist")) {
                    if (user.notExist) {
                        $.get("/signin", data);
                        window.location = '/index';
                    } else {
                        document.getElementById("hasRegistered").style.display = "";
                    }
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // throw error
            },
            dataType: "json"
        });
    }
}

function correctEmail(email) {
    var testEmail = document.getElementById("inputEmailError");
    if (!emailValidate(email)) {
        $("#inputEmail").css("border-color", RED);
        testEmail.style.display = "";
        return false;
    } else {
        $("#inputEmail").css("border-color", GREEN);
        return true;
    }
}

function correctPassword(password) {
    var testPassword = document.getElementById("inputPasswordError");
    if (password.length < 6) {
        $("#inputPassword").css("border-color", RED);
        testPassword.style.display = "";
        return false;
    } else {
        $("#inputPassword").css("border-color", GREEN);
        return true;
    }
}

function emailValidate(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function inputValidateEmail(email) {
    var validEmail;
    var testEmail = document.getElementById("signup-inputEmailError");
    if (!emailValidate(email)) {
        $("#signup-inputEmail").css("border-color", RED);
        testEmail.style.display = "";
        validEmail = false;
    } else {
        $("#signup-inputEmail").css("border-color", GREEN);
        testEmail.style.display = "none";
        validEmail = true;
    }
    return validEmail;
}

function inputValidateUserName(name) {
    var validName;
    var testUserName = document.getElementById("userNameError");
    if (name === "") {
        $("signup-inputUserName").css("border-color", RED);
        testUserName.style.display = "";
        validName = false;
    } else {
        $("signup-inputUserName").css("border-color", GREEN);
        testUserName.style.display = "none";
        validName = true;
    }
    return validName;
}

function inputValidatePwd1(pwd1) {
    var validPwd1;
    var testPassword = document.getElementById("signup-inputPasswordError");
    if (pwd1.length < 6) {
        $("#inputPassword1").css("border-color", RED);
        testPassword.style.display = "";
        validPwd1 = false;
    } else {
        $("#inputPassword1").css("border-color", GREEN);
        testPassword.style.display = "none";
        validPwd1 = true;
    }
    return validPwd1;
}

function inputValidatePwd2(pwd1, pwd2) {
    var validPwd2;
    var testConfirmPassword = document.getElementById("signup-confirmPasswordError");
    if (pwd2 == pwd1) {
        $("#inputPassword2").css("border-color", GREEN);
        testConfirmPassword.style.display = "none";
        validPwd2 = true;
    } else {
        $("#inputPassword2").css("border-color", RED);
        testConfirmPassword.style.display = "";
        validPwd2 = false;
    }
    return validPwd2;
}

function inputValidation(email, name, pwd1, pwd2) {
    var validEmail, validPwd1, validPwd2, validName;
    var jump = false;
    // validate email
    validEmail = inputValidateEmail(email);
    // validate user name
    validName = inputValidateUserName(name);
    // validate password.
    validPwd1 = inputValidatePwd1(pwd1);
    // validate confirm password
    validPwd2 = inputValidatePwd2(pwd1, pwd2);
    if (validEmail && validName && validPwd1 && validPwd2)
        jump = true;
    var validate = {
        validEmail: validEmail,
        validName: validName,
        validPwd1: validPwd1,
        validPwd2: validPwd2
    };
    return validate;
}

function searchDestination() {
    var placeName = $("#destination-input").val();
    console.log(placeName);
    var data = { "placeName": placeName };
    if (placeName !== "") {
        $.ajax({
            url: "/details",
            data: data,
            method: "GET",
            dataType: "xml",
            success: function(xmlDoc) {
                console.log(xmlDoc);

                document.getElementById("page-scroll-destination").style.display = "";
                document.getElementById("side-menu-toggle").style.display = "";
                document.getElementById("detail-wrapper").style.display = "";
                document.getElementById("destination-top").style.display = "none";
                document.getElementById("explore-the-world").style.display = "none";
                document.getElementById("meet-stories").style.display = "none";
                document.getElementById("destination-footer").style.display = "none";
                if ($("#page-scroll-signin") !== null)
                    $("#page-scroll-signin").html('<a href="../index.html">Sign Out</a>');
                // window.location = "../views/destinationDetails.html";
                var head = $("#distination-detail-placeName");
                var storiesContainer = $("#destination-stories-notes");
                $(xmlDoc).find("place").each(function() {
                    var placeID = $(this).find("placeID").text();
                    var placeName = $(this).find("placeName").text();
                    var placeDetail = $(this).find("placeDetail").text();
                    var headHtml = '<h3 class="page-header">' + placeName + '<small>' + "&nbsp;" + placeDetail + '</small></h3>';
                    head.html(headHtml);
                    var stories = [];
                    var storyHtml = '';
                    $(this).find("story").each(function(){
                        var storyID = $(this).find("recentStoryID").text();
                        var storyTitle = $(this).find("recentStoryTitle").text();
                        var storyEditor = $(this).find("recentStoryEditor").text();
                        var storyDate = $(this).find("recentStoryDate").text();
                        var story = {
                            "storyID": storyID, 
                            "storyTitle": storyTitle, 
                            "storyEditor": storyEditor, 
                            "storyDate": storyDate
                        };
                        stories.push(story);
                        storyHtml += '<div class="row"><div class="col-md-3"><a href="#"><img class="img-responsive" src="../img/stories/story1.JPG" alt=""></a></div><div class="col-md-7"><div class="post-preview"><a href="#"><h3 class="post-title">';
                        storyHtml += story.storyTitle + '</h3><h4 class="post-subtitle">Content of this story...</h4></a><p class="post-meta">Posted by ';
                        storyHtml += '<a href="#">' + story.storyEditor + '</a> &nbsp; on ' + story.storyDate + '</p></div></div></div><hr>';
                    });
                    storyHtml += '<ul class="pager"><li class="next"><a href="#">Older Posts &rarr;</a></li></ul>';
                    storiesContainer.html(storyHtml);
                });
                // storiesContainer.html(storyHtml);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // throw error
            }
        });
    }
}

