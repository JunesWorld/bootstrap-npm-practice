/** 
 * [bundle = 모든 내용] 
 * import bootstrap from 'bootstrap/dist/js/bootstrap.bundle' 
*/

/** [드롭다운, 모달에 관련된 폴더만 다운] */
import Dropdown from 'bootstrap/js/dist/dropdown'
import Modal from 'bootstrap/js/dist/modal'

/** 
 * [드롭다운 내용 초기화]
 * - Bootstrap Hompage
 * - 오른쪽 Usage - Via Javascript
 * - bundle을 사용할때는 bootstrap이라는 전역변수를 사용할 수 있지만
 * - Dropdown만 사용하기 때문에 bootstrap 전역변수 제거
 */
const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new Dropdown(dropdownToggleEl))

/**
 * [Modal 초기화]
 * - HTML ID 값으로 변경 : exampleModal
 * - options 
 * |- 제어 가능 
 * |- backdrop(배경 선택시 종료 X)
 */
new Modal(document.querySelector('#exampleModal'), {
  backdrop: 'static'
})