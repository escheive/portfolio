
// Dependencies
import { Box } from "@mui/material";
// Style
import './style.scss';

export default function Home() {

    return (

        <Box className='main-background' style={{ height: 'calc(100vh - 125px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

            <div className='overlay'></div>
            <a style={{ color: 'inherit', textDecoration: 'none'}} href='/about'><div class="text">
                <div class="wrapper">
                    <div id="E" class="letter">E</div>
                    <div class="shadow">E</div>
                </div>
                <div class="wrapper">
                    <div id="R" class="letter">R</div>
                    <div class="shadow">R</div>
                </div>
                <div class="wrapper">
                    <div id="I" class="letter">I</div>
                    <div class="shadow">I</div>
                </div>
                <div class="wrapper">
                    <div id="K" class="letter">K</div>
                    <div class="shadow">K</div>
                </div>
                <div class="wrapper">
                    <div class="letter"></div>
                    <div class="shadow"></div>
                </div>
                <div class="wrapper">
                    <div id="S" class="letter">S</div>
                    <div class="shadow">S</div>
                </div>
                <div class="wrapper">
                    <div id="C" class="letter">C</div>
                    <div class="shadow">C</div>
                </div>
                <div class="wrapper">
                    <div id="H" class="letter">H</div>
                    <div class="shadow">H</div>
                </div>
                <div class="wrapper">
                    <div id="Etwo" class="letter">E</div>
                    <div class="shadow">E</div>
                </div>
                <div class="wrapper">
                    <div id="Itwo" class="letter">I</div>
                    <div class="shadow">I</div>
                </div>
                <div class="wrapper">
                    <div id="V" class="letter">V</div>
                    <div class="shadow">V</div>
                </div>
                <div class="wrapper">
                    <div id="Ethree" class="letter">E</div>
                    <div class="shadow">E</div>
                </div>
            </div></a>

        </Box>

    )

}