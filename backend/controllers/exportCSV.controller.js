const { createObjectCsvWriter } = require('csv-writer');
const fs = require('fs');
const path = require("path");
const UserModel = require("../models/user.model");

const exportCSV = async (req, res) => {

     try {
          const users = await UserModel.find();
          const csvWriter = createObjectCsvWriter({
               path: 'user_master.csv',
               header: [
                    { id: 'id', title: 'Id' },
                    { id: 'name', title: 'Name' },
                    { id: 'email', title: 'Email' },
                    { id: 'gender', title: 'Gender' },
                    { id: 'status', title: 'Status' },
                    { id: 'createdAt', title: 'Created at' },
                    { id: 'updatedAt', title: 'Updated at' },
               ],
          });

          csvWriter.writeRecords(users)
               .then(() => {
                    // Read the CSV file data
                    const filePath = path.join(__dirname, '../', 'user_master.csv');
                    const csvData = fs.readFileSync(filePath, 'utf8');

                    // Set the appropriate headers for the CSV response
                    res.setHeader('Content-Type', 'text/csv');
                    res.setHeader('Content-Disposition', 'attachment; filename=user_master.csv');

                    // Send the CSV data as a response to the frontend
                    res.send(csvData);
                    fs.unlinkSync(filePath)
               })
               .catch((error) => {
                    console.error('Something went wrong. Unable to write the CSV file.', error);
                    res.status(500).json({ error: 'Unable to export user data' });
               });
     } catch (error) {
          console.log('error:', error)
          res.status(500).send({ message: error.message })
     }


};

module.exports = { exportCSV }