// edit
const profileEditButton = document.querySelector('.profile__edit-button');
const editProfile = document.querySelector('.popup_type_edit');
const popupCloseEdit = document.querySelector('.popup__close_type_edit');
const formProfileEdit = document.querySelector('.popup__container_type_edit');
const profileAuthor = document.querySelector('.profile__info-author');
const profileProfession = document.querySelector('.profile__info-profession');
const popupAuthor = document.querySelector('.popup__text_type_author');
const popupProfession = document.querySelector('.popup__text_type_profession');
// ADD
const profileAddButton = document.querySelector('.profile__add-button');
const addElement = document.querySelector('.popup_type_add');
const popupCloseAdd = document.querySelector('.popup__close_type_add');
const formProfileAdd = document.querySelector('.popup__container_type_add');
const popupPlace = document.querySelector('.popup__text_type_place');
const popupUrl = document.querySelector('.popup__text_type_url');
// Zoom
const popupZoom = document.querySelector('.popup__type_img');
const popupCloseImg = document.querySelector('.popup__close_img');
const popupImg = document.querySelector('.popup__photo');
const popupCaption = document.querySelector('.popup__caption');
// Елементы
const elements = document.querySelector('.elements');
const template = document.querySelector('#template').content;
// Массив
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



// Edit
// Открытие popup и взятие данных
function openPopup(mod) {
  mod.classList.add('popup_opened');

  if (mod === editProfile) {
    // Значение из профиля
    popupAuthor.value = profileAuthor.textContent;
    popupProfession.value = profileProfession.textContent;
  }
}
// Закрытие окна Popup
function closePopup(mod) {
  mod.classList.remove('popup_opened');
}
// Изменение автора и профессии с сохранением
function editFormSubmitHandler(evt) {
  evt.preventDefault();
  // Значение в профиль
  const newName = popupAuthor.value;
  const newJob = popupProfession.value;
  profileAuthor.textContent = newName;
  profileProfession.textContent = newJob;

  closePopup(editProfile);
}

// Add

// Добавление карточек из массива + добавление новых карточек
function manageCard(name, link) {
  const element = template.cloneNode(true);
  const title = element.querySelector('.element__title');
  const img = element.querySelector('.element__img');
  const like = element.querySelector('.element__like');
  const clear = element.querySelector('.element__delete');
  

  title.textContent = name;
  img.src = link;
  img.alt = name;

  // Удаление
  clear.addEventListener('click', function (evt) {
     evt.target.closest('.element').remove();
  });
  
  //  Like
  like.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });

  // Просмотр картинки 
  img.addEventListener('click', function () {
    popupImg.src = img.src;
    popupImg.alt = img.alt;
    popupCaption.textContent = title.textContent;
    openPopup(popupZoom);
  });
    
  elements.prepend(element);
}

initialCards.forEach(function (item) {
  manageCard(item.name, item.link);
});

//Add
function addFormSubmitHandler(evt) {
  evt.preventDefault();
  // Добавление новой карточки
  manageCard(popupPlace.value, popupUrl.value);
  closePopup(addElement);
  popupPlace.value = "";
  popupUrl.value = "";
}

popupCloseImg.addEventListener('click', () => closePopup(popupZoom));
profileAddButton.addEventListener('click', () => openPopup(addElement));
popupCloseAdd.addEventListener('click', () => closePopup(addElement));
formProfileAdd.addEventListener('submit', addFormSubmitHandler);
profileEditButton.addEventListener('click', () => openPopup(editProfile));
popupCloseEdit.addEventListener('click', () => closePopup(editProfile));
formProfileEdit.addEventListener('submit', editFormSubmitHandler);


