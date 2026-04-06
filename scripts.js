console.log('Script loaded');
    // ========== DỮ LIỆU QUY TRÌNH ==========
    const quanlyData = [
        { name: "Quy trình khám bệnh BHYT", boYTe: "", benhVien: "", link: "#" },
        { name: "Quy trình hội chẩn", boYTe: "", benhVien: "", link: "#" },
        { name: "Quy trình chuyển viện", boYTe: "", benhVien: "", link: "#" },        
        { name: "Quy trình quản lý hồ sơ bệnh án", boYTe: "", benhVien: "", link: "#" },        
        { name: "Quy trình báo cáo sự cố y khoa", boYTe: "", benhVien: "", link: "#" },        
        { name: "Quy trình kiểm tra, giám sát chuyên môn", boYTe: "", benhVien: "", link: "#" }
    ];

    const yhctData = [
        { name: "Hào châm", boYTe: "486/QĐ-BYT", benhVien: "69/QĐ-BVYHCT", link: "https://drive.google.com/file/d/1fxSmQiySQcv1dUhPQHvblEzDqtZCxHER/view" },
	{ name: "Điện châm", boYTe: "486/QĐ-BYT", benhVien: "69/QĐ-BVYHCT", link: "https://drive.google.com/file/d/1bbmuJhqAawKMZ762rsPJwk0v-pxo4Wkd/view" },        
        { name: "Thủy châm", boYTe: "486/QĐ-BYT", benhVien: "69/QĐ-BVYHCT", link: "https://drive.google.com/file/d/1LrYhWIo6g861O3BiEbfGhbs7pRLewyhN/view" },
	{ name: "Cấy chỉ điều trị", boYTe: "486/QĐ-BYT", benhVien: "69/QĐ-BVYHCT", link: "https://drive.google.com/file/d/1HtCcNOhYsAVfPSldUxFYzZtTxU6kJ93S/view" }, 
	{ name: "Xoa bóp bấm huyệt", boYTe: "486/QĐ-BYT", benhVien: "69/QĐ-BVYHCT", link: "https://drive.google.com/file/d/118N6z394fSupQ7OuVH4BtBHCTyYnqO1a/view" },       
        { name: "Cứu ngải", boYTe: "486/QĐ-BYT", benhVien: "69/QĐ-BVYHCT", link: "https://drive.google.com/file/d/1szJGj-2uuIiel1LY4Knfu8JLQOkWm9Zl/view" },
	{ name: "Ngâm thuốc Y học cổ truyền bộ phận", boYTe: "486/QĐ-BYT", benhVien: "69/QĐ-BVYHCT", link: "https://drive.google.com/file/d/1SEKkVJpIWLynuBh8K4tKM8w77EScWBqb/view" },                
        { name: "Giác hơi", boYTe: "486/QĐ-BYT", benhVien: "69/QĐ-BVYHCT", link: "https://drive.google.com/file/d/1DdPjcXlIUUPwkhxB-9f3VI0xNzjzNNIU/view" }	
    ];
    
    const phcnData = [
        { name: "Điều trị bằng sóng ngắn", boYTe: "3553/QĐ-BYT", benhVien: "68/QĐ-BVYHCT", link: "https://drive.google.com/file/d/1rdhU7Ije8xiqJlYykGEgeYyYhWNYmC9M/view" },
        { name: "Điều trị bằng từ trường", boYTe: "3553/QĐ-BYT", benhVien: "68/QĐ-BVYHCT", link: "https://drive.google.com/file/d/1-zHt7wPeJbKLEE8zOIYEESvW_IG46uPU/view" },
        { name: "Điều trị bằng các dòng điện xung", boYTe: "3553/QĐ-BYT", benhVien: "68/QĐ-BVYHCT", link: "https://drive.google.com/file/d/1dewV9XgeR13B3mCYJP-jfgCm-0zelo27/view" },        
        { name: "Điều trị bằng siêu âm", boYTe: "3553/QĐ-BYT", benhVien: "68/QĐ-BVYHCT", link: "https://drive.google.com/file/d/1yBMLR-GsxtLtno8SwZ3tIDQ3f2R1B9D6/view" },
        { name: "Điều trị bằng sóng xung kích", boYTe: "3553/QĐ-BYT", benhVien: "68/QĐ-BVYHCT", link: "https://drive.google.com/file/d/1lRkki_zNdFPrJDWstIXGWi1fInw_WLVp/view" },
        { name: "Điều trị bằng dòng giao thoa", boYTe: "3553/QĐ-BYT", benhVien: "68/QĐ-BVYHCT", link: "https://drive.google.com/file/d/1o9a6-B05B41NtuDT61oNT7fjqRzjV5wt/view" },
	{ name: "Điều trị bằng tia hồng ngoại", boYTe: "3553/QĐ-BYT", benhVien: "68/QĐ-BVYHCT", link: "https://drive.google.com/file/d/1Ge52MRLfEF40yFq9uVb0Ngsb4YOZr297/view" },
	{ name: "Điều trị bằng máy kéo giãn cột sống", boYTe: "3553/QĐ-BYT", benhVien: "68/QĐ-BVYHCT", link: "https://drive.google.com/file/d/1jUl53i5mQxGug1dWMQ8qCSsQ9ZMa39lb/view" },
	{ name: "Kỹ thuật xoa bóp vùng", boYTe: "3553/QĐ-BYT", benhVien: "68/QĐ-BVYHCT", link: "https://drive.google.com/file/d/19o3ZmlDtOI4bOGO9ZrWQTT4kg1Hq6s6P/view" }
    ];
    
    const dienquangData = [
        { name: "Siêu âm ổ bụng (gan mật, tụy, lách, thận, bàng quang)", boYTe: "623/QĐ-BYT", benhVien: "", link: "#" },
	{ name: "Siêu âm khớp", boYTe: "623/QĐ-BYT", benhVien: "", link: "#" },        
        { name: "Chụp X-quang ngực thẳng", boYTe: "623/QĐ-BYT", benhVien: "", link: "#" },
        { name: "Chụp X-quang cột sống thắt lưng thẳng, nghiêng", boYTe: "623/QĐ-BYT", benhVien: "", link: "#" },
        { name: "Chụp X-quang cột sống cổ thẳng, nghiêng", boYTe: "623/QĐ-BYT", benhVien: "", link: "#" },
        { name: "Chụp X-quang khớp gối thẳng, nghiêng hoặc chếch", boYTe: "623/QĐ-BYT", benhVien: "", link: "#" }
    ];
    
    const noikhoaData = [
        { name: "Nội soi ống cứng + tiêm xơ búi trĩ", boYTe: "", benhVien: "", link: "#" },        
        { name: "Thông tiểu", boYTe: "", benhVien: "", link: "#" }
    ];

    const chamsocData = [
        { name: "Quy trình chăm sóc", boYTe: "", benhVien: "", link: "#" },        
        { name: "Quy trình dinh dưỡng", boYTe: "", benhVien: "", link: "#" }
    ];

    const kskData = [        
        { name: "Quy trình vệ sinh tay", boYTe: "", benhVien: "", link: "#" },
        { name: "Quy trình khử khuẩn - tiệt khuẩn", boYTe: "", benhVien: "", link: "#" }
    ];

    const phongbenhData = [        
        { name: "Quy trình quản lý bệnh không lây nhiễm", boYTe: "", benhVien: "", link: "#" },        
        { name: "Quy trình giám sát dịch tễ", boYTe: "", benhVien: "", link: "#" }
    ];

    const duocData = [        
        { name: "Quy trình cấp phát, bảo quản thuốc", boYTe: "", benhVien: "", link: "#" },
        { name: "Quy trình quản lý thuốc gây nghiện, hướng tâm thần", boYTe: "", benhVien: "", link: "#" },        
        { name: "Quy trình sắc thuốc thang", boYTe: "5480/QĐ-BYT", benhVien: "", link: "https://drive.google.com/file/d/1_sdALYdVfuv_-45rHG2EJvzbnb4dBEZ9/view" }        
    ];

    const emrData = [        
        { name: "Quy trình chữ ký số", boYTe: "", benhVien: "", link: "#" },
        { name: "Quy trình lưu trữ HSBA điện tử", boYTe: "", benhVien: "", link: "#" }        
    ];


    const dieutriData = {
        yhct: yhctData,
        phcn: phcnData,
        dienquang: dienquangData,
        noikhoa: noikhoaData
    };

    // ========== LOGIN & LOGOUT ==========
    const loginOverlay = document.getElementById('loginOverlay');
    const mainContent = document.getElementById('mainContent');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    const loginError = document.getElementById('loginError');
    const logoutBtn = document.getElementById('logoutBtn');

    function checkLogin() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn) {
            loginOverlay.style.display = 'none';
            mainContent.style.display = 'block';
            initApp();
        } else {
            loginOverlay.style.display = 'flex';
            mainContent.style.display = 'none';
        }
    }

    function doLogin() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    console.log('Login attempt:', username); // Debug
    
    if (username === 'bvyhctquangnam' && password === '49015') {
        console.log('Login success'); // Debug
        localStorage.setItem('isLoggedIn', 'true');
        loginError.textContent = '';
        loginOverlay.style.display = 'none';
        mainContent.style.display = 'block';
        initApp();
    } else {
        console.log('Login failed'); // Debug
        loginError.textContent = 'Tên đăng nhập hoặc mật khẩu không đúng!';
    }
}

    function doLogout() {
        localStorage.removeItem('isLoggedIn');
        loginOverlay.style.display = 'flex';
        mainContent.style.display = 'none';
        usernameInput.value = '';
        passwordInput.value = '';
        loginError.textContent = '';
    }

    loginBtn.addEventListener('click', doLogin);
    logoutBtn.addEventListener('click', doLogout);
    
    usernameInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') doLogin(); });
    passwordInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') doLogin(); });

    // ========== PHẦN QUẢN LÝ QUY TRÌNH ==========
    const tableBody = document.getElementById('tableBody');
    const paginationContainer = document.getElementById('paginationContainer');
    const verticalTabs = document.querySelectorAll('.tab-btn-vertical');
    const subTabsContainer = document.getElementById('subTabsContainer');
    const searchInput = document.getElementById('searchInput');
    const searchClearBtn = document.getElementById('searchClearBtn');
    
    let currentMainTab = 'quanly';
    let currentSubTab = 'yhct';
    let currentFullData = [];
    let currentFilteredData = [];
    let currentPage = 1;
    let currentSearchTerm = '';
    const rowsPerPage = 10;

    document.getElementById('currentYear').innerText = new Date().getFullYear();

    function filterDataBySearch(data, searchTerm) {
        if (!searchTerm.trim()) return [...data];
        const term = searchTerm.trim().toLowerCase();
        return data.filter(item => item.name.toLowerCase().includes(term));
    }

    function renderTableWithPagination(dataArray, page = 1, searchTerm = '') {
        const filtered = filterDataBySearch(dataArray, searchTerm);
        currentFilteredData = filtered;
        currentPage = page;
        
        if (!filtered || filtered.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:30px;">🔍 Không tìm thấy quy trình nào phù hợp</td>`;
            paginationContainer.innerHTML = '';
            return;
        }
        
        const totalPages = Math.ceil(filtered.length / rowsPerPage);
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const pageData = filtered.slice(start, end);
        
        let html = '';
        pageData.forEach((item, idx) => {
            const globalIndex = start + idx + 1;
            html += `
                <tr>
                    <td>
                        <div class="ten-quytrinh">
                            <span class="stt-icon">${globalIndex}</span>
                            <span>${item.name}</span>
                        </div>
                    </td>
                    <td><span class="quyetdinh-text">${item.boYTe}</span></td>
                    <td><span class="quyetdinh-text">${item.benhVien}</span></td>
                    <td>
                        <a href="${item.link}" target="_blank" class="btn-pdf" rel="noopener noreferrer">
                            <i class="fas fa-file-pdf"></i> File PDF
                        </a>
                    </td>
                 </tr>
            `;
        });
        tableBody.innerHTML = html;
        
        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }
        
        let paginationHtml = `
            <button onclick="changePage(${page - 1})" ${page === 1 ? 'disabled' : ''}>
                <i class="fas fa-chevron-left"></i> Trước
            </button>
            <span class="page-info">${page} / ${totalPages}</span>
            <button onclick="changePage(${page + 1})" ${page === totalPages ? 'disabled' : ''}>
                Sau <i class="fas fa-chevron-right"></i>
            </button>
        `;
        paginationContainer.innerHTML = paginationHtml;
    }
    
    window.changePage = function(newPage) {
        if (!currentFilteredData || currentFilteredData.length === 0) return;
        const totalPages = Math.ceil(currentFilteredData.length / rowsPerPage);
        if (newPage < 1 || newPage > totalPages) return;
        renderTableWithPagination(currentFullData, newPage, currentSearchTerm);
    };

    function handleSearch() {
        currentSearchTerm = searchInput.value;
        if (currentSearchTerm) {
            searchClearBtn.style.display = 'block';
        } else {
            searchClearBtn.style.display = 'none';
        }
        renderTableWithPagination(currentFullData, 1, currentSearchTerm);
    }

    function clearSearch() {
        searchInput.value = '';
        currentSearchTerm = '';
        searchClearBtn.style.display = 'none';
        renderTableWithPagination(currentFullData, 1, '');
    }

    searchInput.addEventListener('input', handleSearch);
    searchClearBtn.addEventListener('click', clearSearch);

    function switchMainTab(tabId) {
        currentMainTab = tabId;
        currentSearchTerm = '';
        searchInput.value = '';
        searchClearBtn.style.display = 'none';
        
        if (tabId === 'dieutri') {
            subTabsContainer.style.display = 'block';
            document.querySelectorAll('.sub-tab-btn').forEach(btn => {
                if (btn.getAttribute('data-sub') === currentSubTab) {
                    btn.classList.add('active-sub');
                } else {
                    btn.classList.remove('active-sub');
                }
            });
            renderDieutriSub(currentSubTab);
        } else {
            subTabsContainer.style.display = 'none';
            if (tabId === 'quanly') {
                currentFullData = quanlyData;
                renderTableWithPagination(quanlyData, 1, '');
            }
            else if (tabId === 'chamsoc') {
                currentFullData = chamsocData;
                renderTableWithPagination(chamsocData, 1, '');
            }
            else if (tabId === 'ksk') {
                currentFullData = kskData;
                renderTableWithPagination(kskData, 1, '');
            }
            else if (tabId === 'phongbenh') {
                currentFullData = phongbenhData;
                renderTableWithPagination(phongbenhData, 1, '');
            }
            else if (tabId === 'duoc') {
                currentFullData = duocData;
                renderTableWithPagination(duocData, 1, '');
            }
	    else if (tabId === 'emr') {
                currentFullData = emrData;
                renderTableWithPagination(emrData, 1, '');
            }
        }
    }

    function renderDieutriSub(subKey) {
        const data = dieutriData[subKey];
        if (data) {
            currentFullData = data;
            renderTableWithPagination(data, 1, '');
        }
        else renderTableWithPagination([], 1, '');
    }

    function bindVerticalTabs() {
        verticalTabs.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                if (!tabId) return;
                verticalTabs.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                switchMainTab(tabId);
            });
        });
    }

    function bindSubTabs() {
        const subBtns = document.querySelectorAll('.sub-tab-btn');
        subBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const subVal = btn.getAttribute('data-sub');
                if (!subVal) return;
                currentSubTab = subVal;
                subBtns.forEach(b => b.classList.remove('active-sub'));
                btn.classList.add('active-sub');
                if (currentMainTab === 'dieutri') {
                    renderDieutriSub(subVal);
                }
            });
        });
    }

    function initApp() {
        bindVerticalTabs();
        bindSubTabs();
        switchMainTab('quanly');
    }

    // Export ra window để có thể gọi từ HTML nếu cần
    window.initApp = initApp;
    
    checkLogin();