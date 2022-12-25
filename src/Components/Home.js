import { Container } from "react-bootstrap";

export const Home = () => {
    return

    // <!-- Start HERO Section -->
    <section class="hero bg-binar" id="hero">
        <Container>
            <div class="row flex-lg-row align-items-center g-5 py-5">
                <div class="col-lg-6 col-sm-12">
                    <h2 class="hero-title">Sewa & Rental Mobil Terbaik di kawasan Buitenzorg</h2>
                    <h5 class="hero-sub my-3">
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                    </h5>
                    <p class="lead my-4"></p>
                    <a href="cari-mobil.html"><button class="btn btn-binar btn-lg">Mulai Sewa Mobil</button></a>
                    
                </div>
                <div class="col-10 col-sm-12 col-lg-6 hero-img">
                    <img src="assets/img/img_car.png" alt="mobil" class="d-block mx-lg-auto img-fluid" width="704px" height="407px">
                </div>
                
            </div>
        </Container>
    </section>
    {/* <!-- End Our Services Section --> */}
}