exports.createTalde = async (req, res) => {
    const talde = new Taldea(req.body);
    const savedTalde = await talde.save();
    res.status(201).json(savedTalde);
};

exports.assignIkasleToTalde = async (req, res) => {
    const { taldeId, ikasleId } = req.body;
    const talde = await Taldea.findById(taldeId);
    talde.ikasleak.push(ikasleId);
    await talde.save();
    res.json(talde);
};

exports.getTaldeak = async (req, res) => {
    const taldeak = await Taldea.find().populate('ikasleak');
    res.json(taldeak);
};
