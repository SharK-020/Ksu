import React from 'react'

const Home = () => {
  return (
    <div className="">
        <main className="grid grid-cols-1 md:grid-cols-2 mx-4 gap-2 ">
          <article className="space-y-4">
            {/*we'll fetch text content from the database later, this is just for sample*/}

            <p className="bg-gray-100 font-sanserif sm:tracking-tighter rounded-lg md:text-md md:tracking-tight lg:text-lg lg:tracking-normal lg:leading-relaxed mt-3">
              Welcome to Kanchenjunga State University: An Introduction to Our
              Institution This article could provide a warm and inviting
              introduction to the university, highlighting its history, mission,
              and values. It can also mention the various academic programs and
              facilities available to students. Exploring the Natural Beauty of
              Sikkim: A Gateway to the Himalayas Sikkim is known for its
              breathtaking landscapes and proximity to the majestic Kanchenjunga
              mountain.
            </p>
            <p className="bg-gray-100 font-sanserif sm:tracking-tighter rounded-lg md:text-md md:tracking-tight lg:text-lg lg:tracking-normal lg:leading-relaxed">
              This article could showcase the natural beauty of the region,
              including its flora, fauna, and adventure opportunities,
              emphasizing how the university is ideally located for students to
              experience it all. Student Life at Kanchenjunga State University:
              A Vibrant and Inclusive Community This article could focus on the
              university's vibrant student life, highlighting the various clubs,
              societies, and events that contribute to a well-rounded college
              experience. It can mention cultural festivals, sports activities,
              and opportunities for community engagement. Faculty Spotlight:
              Academic Excellence and Mentorship at Kanchenjunga State
              University Featuring notable faculty members and their expertise,
              this article can emphasize the university's commitment to academic
              excellence and highlight the diverse research and teaching
              interests of the faculty. It can also discuss the mentorship
              opportunities available to students. Supporting Student Success:
              Resources and Services at Kanchenjunga State University This
              article can showcase the various academic and support services
              offered by the university, such as libraries, research centers,
              career counseling, and student support programs. It can highlight
              how these resources contribute to student success and personal
              growth. Engaging with the Community: Social Impact and Outreach
              Initiatives Kanchenjunga State University can be portrayed as an
              institution that actively engages with the local community through
              outreach programs, social impact initiatives, and partnerships.
              This article can highlight specific projects or collaborations
              that demonstrate the university's commitment to making a positive
              difference.
            </p>
          </article>
          {/*university stock photo here*/}
          <img
            src="https://www.shutterstock.com/image-photo/handsome-hispanic-student-uses-laptop-260nw-1077839366.jpg"
            alt=" "
          />
        </main>
      </div>
  )
}

export default Home