import Navbar from "../Components/Navbar";
import HeaderTitle from "../Components/HeaderTitle";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <>
      <title>APTS Contact</title>
      <Navbar />
      <HeaderTitle title={'Get In Touch'} />
      <div class="container">
        <div class="col-12 center-text py-5">
          <h1 class="text-center">WHERE I WORK</h1>
          <p class="text-center">
            <em>I'd love your feedback!</em>
          </p>
        </div>
        <div class="col-4 p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75995.37890395238!2d-2.3046991417969034!3d53.471040900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb19375507597%3A0x2c7f1d0eaf5e5cb1!2sBusiness%20View%20Google!5e0!3m2!1sen!2suk!4v1634148620934!5m2!1sen!2suk"
            width="100%"
            height="250"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div class="col-8 p-4">
          <div class="">
            <div class='py-1'>
              <i class="fas fa-map-marker-alt fa-lg"></i>
              <span class='pl-2'>address</span>
            </div>

            <div class='py-1'>
              <i class="fas fa-phone-alt fa-lg"></i>
              <span class='pl-2'>Phone: + phone1</span>
            </div>

            <div class='py-1'>
              <i class="fas fa-envelope fa-lg"></i>
              <span class='pl-2'>Email:email</span>
            </div>
          </div>
          <p class='rm py-1'>
            Swing by for a cup of <i class="fas fa-coffee fa-lg"></i>, or leave
            me a note:
          </p>
          <form
            class=""
            target="_blank"
          >
            <div class="flex-right">
              <input
                class="col-4 mr-2 my-2 input"
                type="text"
                placeholder="Name"
                required
                name="Name"
              />
              <input
                class="col-8 my-2 input"
                type="text"
                placeholder="Email"
                required
                name="Email"
              />
            </div>
            <textarea
              class="input mb-2 flex-right col-12"
              type="text"
              placeholder="Message"
              required
              name="Message"
            ></textarea>
            <button class="button" type="submit">
              <i class="fas fa-paper-plane fa-lg"></i> SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
