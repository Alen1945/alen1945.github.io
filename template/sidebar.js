function getSidebar(){
    return `<div class="side_menu">
            <div class="logo">
                <a href="#">
                        <h2>Materi</h2>
                    </a>
            </div>
            <ul class="list menu-left">
                <li>
                    <a href="#container-materi" data-action="open-materi" data-media="pendahuluan">Pendahuluan</a>
                </li>
                <li>
                    <a href="#container-materi" data-action="open-materi" data-media="nonLinear">Penyelesain Persamaan Non Linear</a>
                </li>
                <li>
                    <div class="dropdown">
                        <button type="button" class="dropdown-toggle" data-toggle="dropdown">
                            Metode Tertutup
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#container-materi" data-action="open-materi">Metode Tabel</a>
                            <a class="dropdown-item" href="#container-materi" data-action="open-materi">Metode Biseksi</a>
                            <a class="dropdown-item" href="#container-materi" data-action="open-materi">Metode Regulasi Falsi</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="dropdown">
                        <button type="button" class="dropdown-toggle" data-toggle="dropdown">
                            Metode Terbuka
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#container-materi" data-action="open-materi">Metode Iterasi Serderhana</a>
                            <a class="dropdown-item" href="#container-materi" data-action="open-materi">Metode Newton-Rapshon</a>
                            <a class="dropdown-item" href="#container-materi" data-action="open-materi">Metode Secant</a>
                        </div>
                    </div>
                </li>
            </ul>
            </div>

            <div class="canvus_menu">
                <div class="container">
                    <div class="toggle_icon" title="Menu Bar">
                        <span></span>
                    </div>
                </div>
            </div>
    `
}