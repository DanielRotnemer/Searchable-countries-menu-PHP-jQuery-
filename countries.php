<?php

    require_once('utilities/utilities.php');

    $myCountry = 'United States';
    $myCountryFlagSrc = 'flags/blank.gif';
    $myCountryFlagClass = 'class="flag flag-us"';

    $countries = DigitalCountryCodesArray();

    $countriesList =
    '<div class="selected-country-w noselect">
        <div class="country-flag-w">
            <div class="b-country-flag-w">
                <img style="position: relative; display: block; top: 50%; transform: translateY(-50%); left: 0; border: none; outline: none;" src="'.$myCountryFlagSrc.'" '.$myCountryFlagClass.'/>
            </div>
        </div>
        <input id="country" type="text" readonly class="noselect" value="'.$myCountry.'"/>
    </div>
    
    <div class="menu-threshold">
        <div class="menu-wrapper">
            <div class="country-search-box-w">
                <input type="text" class="country-search-txt" placeholder="Type to find your country"/>
            </div>
            <div class="countries-res-wrapper">';

            foreach ($countries as $index => $countryData)
            {
                $code = strtolower($countryData['code']);
                $phoneCode = $countryData['d_code'];
                $image = '';
                if ($code == 'gf' || $code == 'gp' || $code == 'io' || $code == 'pm' || $code == 're' || $code == 'xk') {
                    $image = 'src="alt_flags/'.$code.'.jpg"';
                }
                else {
                    $image = 'src="flags/blank.gif" class="flag flag-'.$code.'"';
                }

                $color = $countryData['name'] == $myCountry ? 'style="color: #135bb8;"' : '';
                $border = $index == count($countries) - 1 ? '' : 'style="border-bottom: 1px solid #454545;"';

                $countriesList .=
                '<div class="country-w noselect" '.$border.'>
                    <div class="search-country-flag-w">
                        <div class="search-country-flag">
                            <img style="position: relative; display: block; top: 0; left: 0;" '.$image.'/>
                        </div>
                    </div>
                    <div class="country-name-w">
                        <div class="country-name" '.$color.'>'.$countryData['name'].'</div>
                    </div>
                </div>';
            }

            $countriesList .=
            '</div>
        </div>
    </div>';

?>

<html>
    <head>
        <title>Countries list</title>
        <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link rel="stylesheet" href="countries.css?c=<?php echo time(); ?>"/>
        <link rel="stylesheet" href="flags/flags.css"/>
        <link rel="stylesheet" href="flags/flags.min.css"/>
        <script src="countries.js?c=<?php echo time(); ?>"></script>
        <link rel="stylesheet" href="fonts/proximanova/stylesheet.css"/>
        <link rel="stylesheet" href="fonts/proximanova_bold/stylesheet.css"/>
    </head>
    <body>
        <div class="body-wrapper">
            <?php echo $countriesList; ?>
        </div>
    </body>
</html>