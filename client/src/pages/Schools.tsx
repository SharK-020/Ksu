import Programs2 from "../components/Programs2";

const Schools = () => {
  return (
    <div>
      {/* Schools of sanskrit and nepali */}
      {/*Linked to the homepage programs */}
      <section className="p-10 space-y-4">
      <h1 className="text-3xl font-bold">Programs</h1>
      <div className=" flex justify-center">
        <div className="flex flex-col space-y-6">


          <Programs2
            url="https://filose.com/wp-content/uploads/2022/04/sanskrit-calligraphy.png"
            title="Sanskrit"
            desc="Sanskrit is the mother of all languages.
          It is the language of the vedas and the upanishads.
          Sanskrit is one of the oldest languages in the world."
          />
          <Programs2
            url="https://media.istockphoto.com/id/810233162/photo/definition-of-nepali.jpg?s=612x612&w=0&k=20&c=0RGHoOGtCVGW94Fyqzs30ioOEg4jnCApDhy-s0O9IdE="
            title="Nepali"
            desc="Nepali is a beautiful language, originating from the
            Indo-Aryan languages. It is the official language of Nepal.
            Nepali is spoken by over 17 million people worldwide."
          />
        </div>
        </div>
      </section>
    </div>
  );
};

export default Schools;
