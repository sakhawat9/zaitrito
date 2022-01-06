import React from "react";
import PageMenu from "../common/PageMenu";

const FaqArea = () => {
  return (
    <div className="faq-area section-padding">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="lg:col-span-3 md:col-span-4">
            <PageMenu />
          </div>
          <div className="lg:col-span-9 md:col-span-8">
            <div className="accordion" id="accordionFaq">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What shipping methods are availbale?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionFaq"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi ut blandit risus. Donec mollis nec tellus consequat
                      quam a purus faucibus scelerisque. Mauris ac dui ante.
                      Pellentesque congue porttitor Curabitur vel sem mi. Proin
                      in lobortis ipsum. Aliquam rutrum tempor ex ac rutrum.
                      Maecenas nunc nulla, placerat at eleifend in, viverra etos
                      sem. Nam sagittis lacus metus, dignissim blandit magna
                      euismod eget. Suspendisse a nisl lacus. Phasellus eget
                      augue tincidunt, sollicitudin lectus sed, convallis desto.
                      Pellentesque vitae dui lacinia, venenatis erat sit amet,
                      fringilla felis. Nullam maximus nisi nec mi
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How long will it take to get my package to recive?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionFaq"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi ut blandit risus. Donec mollis nec tellus consequat
                      quam a purus faucibus scelerisque. Mauris ac dui ante.
                      Pellentesque congue porttitor Curabitur vel sem mi. Proin
                      in lobortis ipsum. Aliquam rutrum tempor ex ac rutrum.
                      Maecenas nunc nulla, placerat at eleifend in, viverra etos
                      sem. Nam sagittis lacus metus, dignissim blandit magna
                      euismod eget. Suspendisse a nisl lacus. Phasellus eget
                      augue tincidunt, sollicitudin lectus sed, convallis desto.
                      Pellentesque vitae dui lacinia, venenatis erat sit amet,
                      fringilla felis. Nullam maximus nisi nec mi
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Do you ship internationally?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionFaq"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi ut blandit risus. Donec mollis nec tellus consequat
                      quam a purus faucibus scelerisque. Mauris ac dui ante.
                      Pellentesque congue porttitor Curabitur vel sem mi. Proin
                      in lobortis ipsum. Aliquam rutrum tempor ex ac rutrum.
                      Maecenas nunc nulla, placerat at eleifend in, viverra etos
                      sem. Nam sagittis lacus metus, dignissim blandit magna
                      euismod eget. Suspendisse a nisl lacus. Phasellus eget
                      augue tincidunt, sollicitudin lectus sed, convallis desto.
                      Pellentesque vitae dui lacinia, venenatis erat sit amet,
                      fringilla felis. Nullam maximus nisi nec mi
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What payment methods are accepted?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionFaq"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi ut blandit risus. Donec mollis nec tellus consequat
                      quam a purus faucibus scelerisque. Mauris ac dui ante.
                      Pellentesque congue porttitor Curabitur vel sem mi. Proin
                      in lobortis ipsum. Aliquam rutrum tempor ex ac rutrum.
                      Maecenas nunc nulla, placerat at eleifend in, viverra etos
                      sem. Nam sagittis lacus metus, dignissim blandit magna
                      euismod eget. Suspendisse a nisl lacus. Phasellus eget
                      augue tincidunt, sollicitudin lectus sed, convallis desto.
                      Pellentesque vitae dui lacinia, venenatis erat sit amet,
                      fringilla felis. Nullam maximus nisi nec mi
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Is buying on-line safe?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionFaq"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi ut blandit risus. Donec mollis nec tellus consequat
                      quam a purus faucibus scelerisque. Mauris ac dui ante.
                      Pellentesque congue porttitor Curabitur vel sem mi. Proin
                      in lobortis ipsum. Aliquam rutrum tempor ex ac rutrum.
                      Maecenas nunc nulla, placerat at eleifend in, viverra etos
                      sem. Nam sagittis lacus metus, dignissim blandit magna
                      euismod eget. Suspendisse a nisl lacus. Phasellus eget
                      augue tincidunt, sollicitudin lectus sed, convallis desto.
                      Pellentesque vitae dui lacinia, venenatis erat sit amet,
                      fringilla felis. Nullam maximus nisi nec mi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqArea;
