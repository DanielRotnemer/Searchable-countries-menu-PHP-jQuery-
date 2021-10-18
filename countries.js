function openCountriesMenu()
{
    $(".menu-wrapper").css("display", "block");
    $(".selected-country-w").css("border-bottom-left-radius", "0");
    $(".selected-country-w").css("border-bottom-right-radius", "0");
    $(".country-search-txt").focus();
}

function closeCountriesMenu()
{
    $(".menu-wrapper").css("display", "none");
    $(".selected-country-w").css("border-bottom-left-radius", "3px");
    $(".selected-country-w").css("border-bottom-right-radius", "3px");
}

function resize()
{
    $("#country").css("width", ($(".selected-country-w").width() - $(".country-flag-w").width()) + 'px');
}

$.extend($.expr[":"], {
    containsInsensitive: function(elem, i, match, array) {
        return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    }
});

function addEvents()
{
    $(".selected-country-w").on("click", function(event)
    {
        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();

        if ($(".menu-wrapper").css("display") == "none") {
            openCountriesMenu();
        }
        else {
            closeCountriesMenu();
        }
    });

    $(".menu-wrapper").on("click", function(event)
    {
        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();
    });

    $(".country-w").on("click", function(event)
    {
        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();

        $("#country").val($(this).find(".country-name-w").find(".country-name").text());

        let cls = $(this).find(".search-country-flag-w").find(".search-country-flag").find("img").attr("class");
        let src = $(this).find(".search-country-flag-w").find(".search-country-flag").find("img").attr("src"); 

        if (cls != "" && cls != false && typeof cls != undefined) {
            $(".b-country-flag-w").find("img").attr("class", cls);
        }

        $(".b-country-flag-w").find("img").attr("src", src);
        $(".country-name").css("color", "#454545");

        $(this).find(".country-name-w").find(".country-name").css("color", "#135bb8");
        closeCountriesMenu();
    });

    $(".country-w").on("mouseover", function()
    {
        let country = $(this).find(".country-name-w").find(".country-name");
        country.css("font-family", "\'proxima_novasemibold\'");
    });

    $(".country-w").on("mouseout", function()
    {
        let country = $(this).find(".country-name-w").find(".country-name");
        country.css("font-family", "\'proxima_novaregular\'");
    });

    $(".country-search-txt").on("input", function()
    {
        if ($(this).val() != "")
        {
            $(".country-name:not(:containsInsensitive(" + $(this).val() + "))").parent().parent().css("display", "none");
            $(".country-name:containsInsensitive(" + $(this).val() + ")").parent().parent().css("display", "flex");
        }
        else {
            $(".country-name").parent().parent().css("display", "flex");
        }

        $(".country-w").css("border-bottom", "1px solid #454545");
        $($(".country-w[style*=\"display: flex\"]")[$(".country-w[style*=\"display: flex\"]").length - 1]).css("border-bottom", "none");
    });

    $("html").on("click", function() {
        closeCountriesMenu();
    }); 
}

$(window).on("load", function()
{
    resize();
    addEvents();
});