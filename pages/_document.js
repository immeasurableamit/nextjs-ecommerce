import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" data-layout="vertical" data-topbar="light" data-sidebar="dark" data-sidebar-size="lg">
            <Head>
                <meta charSet="utf-8" />
                <link rel="shortcut icon" href="assets/images/favicon.ico" />

                <link href="assets/libs/jsvectormap/css/jsvectormap.min.css" rel="stylesheet" type="text/css" />

                <link href="assets/libs/swiper/swiper-bundle.min.css" rel="stylesheet" type="text/css" />

                <script src="assets/js/layout.js"></script>
                <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
                <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
                <link href="assets/css/app.min.css" rel="stylesheet" type="text/css" />
                <link href="assets/css/custom.min.css" rel="stylesheet" type="text/css" />

            </Head>
            <body>
                <Main />
                <NextScript />
                {/* <!-- JAVASCRIPT --> */}
                <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="assets/libs/simplebar/simplebar.min.js"></script>
                <script src="assets/libs/node-waves/waves.min.js"></script>
                <script src="assets/libs/feather-icons/feather.min.js"></script>
                <script src="assets/js/pages/plugins/lord-icon-2.1.0.js"></script>
                <script src="assets/js/plugins.js"></script>

                {/* <!-- apexcharts --> */}
                {/* <script src="assets/libs/apexcharts/apexcharts.min.js"></script> */}

                {/* <!-- Vector map--> */}
                <script src="assets/libs/jsvectormap/js/jsvectormap.min.js"></script>
                <script src="assets/libs/jsvectormap/maps/world-merc.js"></script>

                {/* <!--Swiper slider js--> */}
                <script src="assets/libs/swiper/swiper-bundle.min.js"></script>

                {/* <!-- Dashboard init --> */}
                <script src="assets/js/pages/dashboard-ecommerce.init.js"></script>

                {/* <!-- App js --> */}
                <script src="assets/js/app.js"></script>
            </body>
        </Html>
    )
}