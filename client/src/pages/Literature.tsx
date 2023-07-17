import Programs2 from "../components/Programs2";

const Literature = () => {
	return (
		<div>
			{/* Schools of sanskrit and nepali */}
			{/*Linked to the homepage programs */}
			<section className="p-10 space-y-4">
				<h1 className="text-3xl font-bold text-center">
					Languages & Literature
				</h1>
				<div className=" flex justify-center">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
						<Programs2
							url="https://media.istockphoto.com/id/810233162/photo/definition-of-nepali.jpg?s=612x612&w=0&k=20&c=0RGHoOGtCVGW94Fyqzs30ioOEg4jnCApDhy-s0O9IdE="
							title="Limboo"
							desc="The Limboo language is an indigenous Sino-Tibetan language spoken by the Limboo people, primarily residing in the Indian state of Sikkim and neighboring regions. It possesses its own unique script and serves as a linguistic emblem of the Limboo community's cultural identity. "
						/>
						<Programs2
							url="https://media.istockphoto.com/id/810233162/photo/definition-of-nepali.jpg?s=612x612&w=0&k=20&c=0RGHoOGtCVGW94Fyqzs30ioOEg4jnCApDhy-s0O9IdE="
							title="Bhutia"
							desc="The Bhutia language is an indigenous Sino-Tibetan language spoken by the Bhutia people, primarily residing in the Indian state of Sikkim and neighboring areas. It has its own distinct script and serves as a linguistic representation of the Bhutia community's cultural heritage. "
						/>
						<Programs2
							url="https://media.istockphoto.com/id/810233162/photo/definition-of-nepali.jpg?s=612x612&w=0&k=20&c=0RGHoOGtCVGW94Fyqzs30ioOEg4jnCApDhy-s0O9IdE="
							title="Lepcha"
							desc="The Lepcha language is an indigenous Sino-Tibetan language spoken by the Lepcha people of Sikkim, India, and neighboring regions. It has its own unique script and serves as a linguistic marker of the Lepcha community's cultural identity."
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Literature;
