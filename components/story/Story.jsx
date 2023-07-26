import Image from "next/image";

const Story = () => {
  return (
    <div className="md:w-[90%] w-[95%] h-[100%] flex flex-col items-center justify-center font-cyreal">
      <p className="text-2xl md:indent-16 indent-10 w-[90%]">
      Unity Park, the former Bristol Industrial Park, was initially the site of the National Rubber
Company. Augustus O. Bourn organized the National Rubber Company in 1864, a spin-off of
the Providence Rubber Company, and built a large plant in Bristol at 500 Wood Street. The
building, a two-story hipped roof structure with an arcade belfry designed by Providence
Architect Clifton A. Hall, was built of stone found on site. Part of the building was destroyed by a
fire in 1870. The building was quickly rebuilt. A new fieldstone building and several new brick
buildings were constructed north of the main office building.
      </p>
      <br />
      <p className="text-2xl md:indent-16 indent-10 w-[90%]">
      A major expansion was undertaken from 1881 to 1882. The construction included three
large two-story buildings of local stone to the South of the main building extending to Shaw’s
Lane and a long three-story brick building built on the corner of Wood and Franklin Streets.
Additional facilities include the Packing and Making Building (1881), Boiler House (1881-1882),
and Machine Shop (1881-1882).
      </p>
      <br />
      <p className="text-2xl md:indent-16 indent-10 w-[90%]">
      Economic Problems in 1887 resulted in the company's reorganization by Samuel P. Colt
as the National India Rubber Company. Samuel Colt, merging the Company with several newly
acquired companies, established the United States Rubber Company. Colt was president of the
new company from 1901 to 1918, a period of significant expansion.
      </p>
      <br />
      <div className="md:w-[70%] w-[100%] md:h-[60%] h-[100%] flex flex-col items-center mb-20">
        <div className="md:w-[80%] w-[100%] md:h-[90%] h-[100%]">
          <Image
            src="/images/industrialpark1.png"
            width={1000}
            height={1000}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <p className="md:text-md text-lg">
        The Company was Bristol's largest industry and major employer during this period (1901
to 1918). Samuel Colt introduced profit sharing, stock subscription plans, and pension plans to
employees as benefits.
        </p>
      </div>
      <p className="text-2xl md:indent-16 indent-10 w-[90%]">
      By 1912 the plant specialized only in wire and canvas-rubber footwear (rubber clothing,
hose, boots, rubber-soled shoes, and druggist’s specialties were the significant products before
1892), and by 1931 produced wire and cable exclusively during World War II. Over 4,000
persons were employed, providing wire for portable communications and heavier wire for ships 
and tanks. “Wire to Win the War” was a popular local slogan. Several new buildings were added
during this period, and modifications were made to many of the existing structures.
      </p>
      <br />
      <div className="md:w-[70%] w-[100%] md:h-[60%] h-[100%] flex flex-col items-center mb-20">
        <div className="md:w-[60%] w-[100%] md:h-[90%] h-[100%]">
          <Image
            src="/images/industrialpark2.png"
            width={5000}
            height={5000}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <p className="md:text-md text-lg">
          Former Kaiser Aluminum and Chemical Corporation Plant, late 1970’s
          early 1980’s.
        </p>
      </div>
      <p className="text-2xl md:indent-16 indent-10 w-[90%]">
      In 1957, Kaiser Aluminum and Chemical Corporation acquired the plant, which
produced a greater variety of conductors than any other plant in the United States. Kaiser
operated the facility as a copper and aluminum wire plant until it closed in 1977. The property
was given to Roger Williams University, formerly Roger Williams College.
      </p>
      <br />
      <p className="text-2xl md:indent-16 indent-10 w-[90%]">
      Plans to renovate the facility as a community educational/residential/industrial complex
failed to gain zoning and, in the early 1980s, sold to Lyle Fain, a Providence developer. Lyle
purchased the complex with plans to redevelop the property as an industrial condominium
project. The Project was named the “Bristol Industrial Park.”
      </p>
      <br />
      <p className="text-2xl md:indent-16 indent-10 w-[90%]">
      In 1993, The Bristol Foundation, a non-profit developer, created housing for the elderly.
The first phase of the renovation, which incorporated roughly 400,000 square feet of the
available 800,000 square feet, was completed, followed by a second phase of 50,000 square
feet of assisted living/care was completed shortly afterward.
      </p>
      <br />
      <p className="text-2xl md:indent-16 indent-10 w-[90%]">
      The Bristol Foundation (the local committee that oversaw the project) later changed its
name to the Mosaico Community Development Corporation to reflect the town’s diverse ethnic
heritage. ‘Mosaico’ is Portuguese for mosaic, which perfectly describes Bristol’s ethnic mix.
      </p>
      <br />
      <p className="text-2xl md:indent-16 indent-10 w-[90%]">
      Mosaico was established with the primary mission to address the immediate physical
needs of the Wood Street neighborhood, including the abandoned Kaiser Mill Complex. In 2010,
Mosaico purchased the remaining property at the 18-acre Kaiser Aluminum and Chemical
Corporation complex and renovated and restored the existing building, developing the property
as an industrial park to create and promote new industry and jobs for Bristol and the
neighboring communities.
      </p>
      <br />
      <p className="text-2xl md:indent-16 indent-10 w-[90%]">
      Unity Park consists of three (3) building groups, 1, 2, and 3 - critical structures within the
former National Rubber Company and Kaiser Aluminum site. Local resident Joseph M. Brito Jr.
conceived the vision for Unity Park in early 2020. Mr. Brito purchased the property in the Spring
of 2020 and immediately began the rehabilitation and adaptive reuse of the Bristol Industrial
Park as Unity Park. The project goes beyond a standard brick-and-mortar mill rehabilitation of
Wood Street's underutilized and blighted structures. The comprehensive plan for Unity Park
brings together diverse organizations and stakeholders working together to realize the shared
long-term goals and strategies to benefit the community – a vision to reuse these historic
structures in an attractive, sustainable, and exciting way that will make Unity Park not only
economically beneficial but also a destination for New England and areas beyond. Implementing
this placemaking strategy for Unity Park will be an economic and visual asset for all of Bristol,
preserving an import essential of its industrial past.
      </p>
      <div className="md:rotate-90 md:mt-0 mt-10">
          <Image
            src="/images/industrialpark3.png"
            width={5000}
            height={5000}
            style={{ width: "100%", height: "100%", objectFit:"contain" }}
          />
      </div>
    </div>
  );
};

export default Story;
