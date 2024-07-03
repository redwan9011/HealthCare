

const Faq = () => {
    return (
        <div className="lg:max-w-6xl 2xl:max-w-7xl lg:mx-8 xl:mx-auto mx-5 md:mx-8 mb-10">
            <p className="border px-4 py-2 rounded-xl w-fit border-black mb-2">Faq</p>
            <h2 className="text-xl md:2xl lg:text-3xl text-[#1b1950] font-bold  mb-6">Frequntly Asked Question</h2>


            <div className="space-y-2">
            <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium bg-yellow-50"> What are your office hours?</div>
  <div className="collapse-content">
    <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium bg-yellow-50">How can I schedule an appointment?</div>
  <div className="collapse-content">
    <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium bg-yellow-50">Do you accept insurance?</div>
  <div className="collapse-content">
    <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium bg-yellow-50">What should I bring to my appointment?</div>
  <div className="collapse-content">
    <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium bg-yellow-50">Do you offer telemedicine appointments?</div>
  <div className="collapse-content">
    <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
  </div>
</div>
            </div>
        </div>
    );
};

export default Faq;