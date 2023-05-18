const Kurs = require("../pkg/kurs/kursSchema");

exports.getKurs = async (req, res) => {
  try {
    const kursevi = await Kurs.find();

    res.status(200).render("kursevi", {
      naslovNaStranata: "Site kursevi",
      godina: "2023",
      kursevi,
    });
  } catch (err) {
    res.status(500).send("Error with this page");
  }
};