import React from "react";

export default function MyForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("inputName").value,
      email: document.getElementById("inputEmail").value,
      comments: document.getElementById("inputComments").value,
      consent: document.getElementById("gridCheck").checked,
    };

    console.log("Form Data:", formData);

    // Store in a global variable for your tag manager
  window.myFormData = formData;

  console.log("Stored form data:", window.myFormData);

  // Trigger form submit event
  const event = new CustomEvent("formSubmitted", { detail: formData });
  window.dispatchEvent(event);

    // Navigate to signup confirmation page
    window.location.href = "#/signupconfirm";
  };

  return (
    <section style={{ paddingLeft: 15, paddingRight: 15, width: "100%" }}>
      <div
        style={{
          color: "rgb(51, 51, 51)",
          marginTop: 20,
          paddingLeft: 15,
          paddingRight: 15,
          backgroundSize: "cover",
          backgroundImage:
            'url("https://demo-system-next.s3.amazonaws.com/cja/r/l/workout-gear-bg.jpg")',
          backgroundPosition: "center bottom",
          height: "90%",
        }}
        className="container"
      >
        <div className="title-center-dark" style={{ color: "rgb(0, 0, 0)" }}>
          <div className="Title__content">
            <h1 className="title-center-dark">BECOME A LUMA+ MEMBER</h1>
          </div>
          <br />
        </div>
        <div className="Container">
          <div className="content" style={{ float: "right" }}>
            <form>
              <div className="row">
                <div className="form-group col-md-6" style={{ float: "right" }}>
                  <label htmlFor="inputFirstName" style={{ fontWeight: 'bold', textShadow: "1px 1px #FFF", }}>NAME</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputLastName" style={{ fontWeight: 'bold', textShadow: "1px 1px #FFF", }}>EMAIL</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail"
                  />
                </div>
              </div>

              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="inputEmail" style={{ fontWeight: 'bold', textShadow: "1px 1px #FFF", }}>TELL US ABOUT YOURSELF</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputComments"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    By clicking 'Submit,' you agree to our terms and conditions
                    and consent to receive marketing emails and SMS text
                    messages from us.
                  </label>
                  <br />
                  <br />
                  <a
                    href="#/signupconfirm"
                    className="btn btn-primary-input"
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </a>
                </div>
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
