const Content = require('../models/contentSchema');
const Faculty = require('../models/facultySchema');
const Fees = require('../models/feesSchema');
const UpcomingEvent = require('../models/upcomingEventSchema');
const LatestNotification = require('../models/latestNotificatonSchema');

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

// Delete Homepage Content
exports.deleteContent = async (req, res) => {
    try {
        const { documentID } = req.params;

        // Find and delete the homepage content based on documentID
        const deletedContent = await Content.findByIdAndDelete(
            documentID
        );

        if (!deletedContent) {
            return res.status(404).json({ error: 'Content not found' });
        }

        res.status(200).json({ message: 'Homepage content deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Faculty Content
exports.updateFaculty = async (req, res) => {
    try {
        // Retrieve necessary data from the request body
        const { documentID } = req.params;
        const { updatedFacultyData } = req.body;

        // Find and update the faculty content based on documentID
        const updatedFaculty = await Faculty.findByIdAndUpdate(
            documentID,
            { $set: { updatedFacultyData } },
            { new: true }
        );

        if (!updatedFaculty) {
            return res.status(404).json({ error: 'Faculty content not found' });
        }

        res.status(200).json({ message: 'Faculty content updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Delete Faculty Content
exports.deleteFaculty = async (req, res) => {
    try {
        // Retrieve necessary data from the request body
        const { documentID } = req.params;

        // Find and delete the faculty content based on documentID
        const deletedFaculty = await Faculty.findByIdAndDelete(
            documentID
        );

        if (!deletedFaculty) {
            return res.status(404).json({ error: 'Faculty content not found' });
        }

        res.status(200).json({ message: 'Faculty content deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Fees Content
exports.updateFees = async (req, res) => {
    try {
        // Retrieve necessary data from the request body
        const { documentID } = req.params;
        const { updatedFeesData } = req.body;

        // Find and update the fees content based on documentID
        const updatedFees = await Fees.findByIdAndUpdate(
            documentID,
            { $set: { updatedFeesData } },
            { new: true }
        );

        if (!updatedFees) {
            return res.status(404).json({ error: 'Fees content not found' });
        }

        res.status(200).json({ message: 'Fees content updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// delete Fees Content
exports.deleteFees = async (req, res) => {
    try {
        // Retrieve necessary data from the request body
        const { documentID } = req.params;

        // Find and delete the fees content based on documentID
        const deletedFees = await Fees.findByIdAndDelete(
            documentID
        );

        if (!deletedFees) {
            return res.status(404).json({ error: 'Fees content not found' });
        }

        res.status(200).json({ message: 'Fees content deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Upcoming Events Content
exports.updateUpcomingEvents = async (req, res) => {
    try {
        // Retrieve necessary data from the request body
        const { documentID } = req.params;
        const { updatedEventsData } = req.body;

        // Find and update the upcoming events content based on documentID
        const updatedEvents = await UpcomingEvent.findByIdAndUpdate(
            documentID,
            { $set: { updatedEventsData } },
            { new: true }
        );

        if (!updatedEvents) {
            return res.status(404).json({ error: 'Upcoming events content not found' });
        }

        res.status(200).json({ message: 'Upcoming events content updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Upcoming Events Content
exports.deleteUpcomingEvents = async (req, res) => {
    try {
        // Retrieve necessary data from the request body
        const { documentID } = req.params;

        // Find and delete the upcoming events content based on documentID
        const deletedEvents = await UpcomingEvent.findByIdAndDelete(
            documentID
        );

        if (!deletedEvents) {
            return res.status(404).json({ error: 'Upcoming events content not found' });
        }

        res.status(200).json({ message: 'Upcoming events content deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Latest Notifications Content
exports.updateLatestNotifications = async (req, res) => {
    try {
        // Retrieve necessary data from the request body
        const { documentID } = req.params;
        const { updatedNotificationsData } = req.body;

        // Find and update the latest notifications content based on documentID
        const updatedNotifications = await LatestNotification.findByIdAndUpdate(
            documentID,
            { $set: { updatedNotificationsData } },
            { new: true }
        );

        if (!updatedNotifications) {
            return res.status(404).json({ error: 'Latest notifications content not found' });
        }

        res.status(200).json({ message: 'Latest notifications content updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Delete Latest Notifications Content
exports.deleteLatestNotifications = async (req, res) => {
    try {
        // Retrieve necessary data from the request body
        const { documentID } = req.params;

        // Find and delete the latest notifications content based on documentID
        const deletedNotifications = await LatestNotification.findByIdAndDelete(
            documentID
        );

        if (!deletedNotifications) {
            return res.status(404).json({ error: 'Latest notifications content not found' });
        }

        res.status(200).json({ message: 'Latest notifications content deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
