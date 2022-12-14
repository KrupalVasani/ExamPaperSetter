const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {

  minimize: () => ipcRenderer.invoke('minimize'), // Minimize The Window

  maximize: () => ipcRenderer.invoke('maximize'), // Maximize The Window

  close: (args) => ipcRenderer.invoke('close', args), // Close The Window

  goBack: () => ipcRenderer.invoke('goBack'), // Navigates To Previous Page

  openNewCourse: () => ipcRenderer.invoke('openNewCourse'), // Open New Course Window

  openCourse: (args) => ipcRenderer.invoke('openCourse', args), // Open New Course Window

  openAddQuestions: (args) => ipcRenderer.invoke('openAddQuestions', args), // Open New Course Window

  openGenereatePaper: (args) => ipcRenderer.invoke('openGenereatePaper', args), // Open New Course Window

  openManageQuestion: (args) => ipcRenderer.invoke('openManageQuestion', args), // Open New Course Window

  openModifyQuestion: (args) => ipcRenderer.invoke('openModifyQuestion', args), // Open New Course Window

  updateCourseWindow: (args) => ipcRenderer.invoke('updateCourseWindow', args), // Update Course Window

  updateCourse: (args) => ipcRenderer.invoke('updateCourse', args), // Update Course

  removeCourse: (args) => ipcRenderer.invoke('removeCourse', args), // Remove Course

  createCourse: args => ipcRenderer.invoke('createCourse', args), // Database Call For Create Course

  getCourses: () => ipcRenderer.invoke('getCourses'),

  getUnits: (args) => ipcRenderer.invoke('getUnits', args), //get Units by course id

  updateUnits: (args) => ipcRenderer.invoke('updateUnits', args),

  getCourseOutcomes: (args) => ipcRenderer.invoke('getCourseOutcomes', args), //get Course Outcomes by course id

  updateCourseOutcomes: (args) => ipcRenderer.invoke('updateCourseOutcomes', args),

  getQuestionTypes: () => ipcRenderer.invoke('getQuestionTypes'), //get Question types

  getTaxonomy: () => ipcRenderer.invoke('getTaxonomy'), //get Taxonomy 

  getCourseFromID: (args) => ipcRenderer.invoke('getCourseFromID', args),

  getQuestions: (args) => ipcRenderer.invoke('getQuestions', args),

  insertQuestion: (args) => ipcRenderer.invoke('insertQuestion', args),

  setInstituteMetaData: (args) => ipcRenderer.invoke('setInstituteMetaData', args),

  showDialog: args => ipcRenderer.invoke('showDialog', args),

  generatePaper: args => ipcRenderer.invoke('generatePaper', args),

  deleteQuestion: args => ipcRenderer.invoke('deleteQuestion', args),

  updateQuestion: args => ipcRenderer.invoke('updateQuestion', args),

  saveFile: args => ipcRenderer.invoke('saveFile', args),

  getFile: args => ipcRenderer.invoke('getFile', args),

  reload: (callback) => ipcRenderer.on('reload', () => { callback() }),

  testSend: (args) => ipcRenderer.send('test-send', args),//Example Send

  testReceive: (callback) => ipcRenderer.on('test-receive', (event, data) => { callback(data) }) // Example Receive
});

