import React from 'react'

function Mapsdisplay() {
  return (
    <section className="text-gray-600 body-font relative mt-10">
    <div className="w-3/4 mx-auto h-screen bg-gray-300">
      <iframe
        width="100%"
        height="100%"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="map"
        scrolling="no"
        src="https://maps.google.com/maps?q=gedung%20serbaguna%20gesikan&t=&z=17&ie=UTF8&iwloc=&output=embed"
        style={{}}
      />
    </div>
  </section>
  )
}

export default Mapsdisplay