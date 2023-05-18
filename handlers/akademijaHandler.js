const Akademija = require('../pkg/akademija/akademijaSchema');

exports.getAll = async (req, res) => {
    try {
        const akademii = await Akademija.find();

        res.status(200).json({
            status:"success",
            data: {
                akademija: akademii
            },
        });
    } catch (err) {
        res.status(404).json ({
            status: "fail",
            message: err,
        })
}
};

exports.getOne = async (req, res) => {
    try {
        const akademija = await Akademija.findById(req.params.id);

        res.status(200).json ({
            status: "success",
            data: {
                akademija,
            },
        });

    } catch (err) {
        res.status(404).json ({
            status: "fail",
            message: err,
        });
    }
};

exports.update = async (req, res) => {
    try{
        const akademija = await Akademija.findByIdAndUpdate(
            req.params.id,
            req.body, 
            {
                new: true,
                runValidators: true,
            }
        );
        res.status(200).json({
            status: "success",
            data: {
                akademija,
            },
        });

    } catch (err) {
    res.status(404).json ({
        status: "fail",
        message: err,
    });
  }
};

exports.delete = async (req, res) => {
    try {
        await Akademija.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "success",
            data: null,
        })

    } catch (err) {
        res.status(404).json ({
            status: "fail",
            message: err,
    });
}
};

exports.create = async (req, res) => {
    try {
    const novaAkademija = await Akademija.create(req.body);
      res.status(201).json({ 
        status: "success",
        data: {
          akademija: novaAkademija,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };