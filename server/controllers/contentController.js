const Content = require('../models/contentSchema')

// Update Homepage Content
exports.updateContent = async (req, res) => {
    try {
        const { documentID } = req.params;
        const { main } = req.body;

        // Find and update the homepage content based on documentID
        const updatedContent = await Content.findByIdAndUpdate(
            documentID,
            { $set: { main } },
            { new: true }
        );

        if (!updatedContent) {
            return res.status(404).json({ error: 'Content not found' });
        }

        res.status(200).json({ message: 'Homepage content updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
