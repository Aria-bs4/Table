<?php
?>

<main id="main">
    <div class="container">
        <section id="forms">

            <div class="row align-items-center formrow">
                <div class="col-md-12 col-sm-12 col-lg-4 colam">
                    <div class="inputbox">
                        <input type="text" id="name" placeholder="Name" autocomplete="off">
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-4 colam">
                    <div class="inputbox">
                        <input type="text" id="family" placeholder="Family" autocomplete="off">
                    </div>
                </div>
                <div class="col-md-12 col-sm-12 col-lg-4 colam">
                    <div id="btnbox">
                        <button id="savebtn" onclick="savedata()">Save information</button>
                        <button id="showbtn" onclick="showdata()">Refresh table</button>
                        <br>
                        data for show : <span id="saveddata">0</span>
                    </div>
                    <div id="edirbtnbox" style="display: none">
                        <button id="savechange" onclick="savecahnge()" >Save changes</button>
                    </div>
                </div>
            </div>
        </section>
        <section id="table">
            <table id='maintable'>
                <tr>
                    <th id="thname">NAME</th>
                    <th id="thfamily">FAMILY</th>
                    <th>edit</th>
                    <th>remove</th>
                </tr>
            </table>
        </section>
    </div>
</main>