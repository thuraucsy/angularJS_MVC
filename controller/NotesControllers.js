
Guidebook.controller('AddNoteController',
  function ($scope, $location, $routeParams, NoteModel) {

    var chapterId = $routeParams.chapterId;
    $scope.cancel = function() {
      $location.path('/chapter/' + chapterId);
    }
    $scope.createNote = function() {
      NoteModel.addNote(chapterId, $scope.note.content);
      $location.path('/chapter/' + chapterId);
    }
  }
);

Guidebook.controller('DeleteNoteController',
  function ($scope, $location, $routeParams, NoteModel) {
    var chapterId = $routeParams.chapterId;
    NoteModel.deleteNote(chapterId, $routeParams.noteId);
    $scope.selectedChapterId = chapterId;
    $location.path('/chapter/' + chapterId);
  }
);

Guidebook.controller('EditNoteController',
  function ($scope, $location, $routeParams, NoteModel) {
    var chapterId = $routeParams.chapterId;
    var userNote = NoteModel.getNoteByChapter(chapterId, $routeParams.noteId);
    console.log(userNote.content);
    $scope.noteContent = userNote.content;
    $scope.updateNote = function() {
      NoteModel.editNote(chapterId, $routeParams.noteId, $scope.noteContent);
      $location.path('/chapter/' + chapterId);
    }
    $scope.cancel = function() {
      $location.path('/chapter/' + chapterId);
    }
  }
);
