console.log('Script loaded');
    // ========== DỮ LIỆU QUY TRÌNH ==========
    const quanlyData = [
        { name: "Quy trình khám bệnh BHYT", boYTe: "TT 32/2023/TT-BYT", benhVien: "QĐ-QL 01/QĐ-BV", link: "#" },
        { name: "Quy trình hội chẩn liên khoa", boYTe: "TT 31/2021/TT-BYT", benhVien: "QĐ-QL 02/QĐ-BV", link: "#" },
        { name: "Quy trình chuyển viện (tuyến trên)", boYTe: "TT 34/2022/TT-BYT", benhVien: "QĐ-QL 03/QĐ-BV", link: "#" },
        { name: "Quy trình chuyển viện (tuyến dưới)", boYTe: "TT 34/2022/TT-BYT", benhVien: "QĐ-QL 04/QĐ-BV", link: "#" },
        { name: "Quy trình tiếp nhận & cấp cứu ban đầu", boYTe: "TT 33/2021/TT-BYT", benhVien: "QĐ-QL 05/QĐ-BV", link: "#" },
        { name: "Quy trình ra viện & hẹn tái khám", boYTe: "TT 37/2023/TT-BYT", benhVien: "QĐ-QL 06/QĐ-BV", link: "#" },
        { name: "Quy trình quản lý hồ sơ bệnh án", boYTe: "TT 46/2018/TT-BYT", benhVien: "QĐ-QL 07/QĐ-BV", link: "#" },
        { name: "Quy trình cấp cứu ngoại viện", boYTe: "TT 23/2022/TT-BYT", benhVien: "QĐ-QL 08/QĐ-BV", link: "#" },
        { name: "Quy trình quản lý chất lượng bệnh viện", boYTe: "QĐ 6858/QĐ-BYT", benhVien: "QĐ-QL 09/QĐ-BV", link: "#" },
        { name: "Quy trình báo cáo sự cố y khoa", boYTe: "TT 43/2021/TT-BYT", benhVien: "QĐ-QL 10/QĐ-BV", link: "#" },
        { name: "Quy trình đào tạo liên tục nhân viên y tế", boYTe: "TT 22/2023/TT-BYT", benhVien: "QĐ-QL 11/QĐ-BV", link: "#" },
        { name: "Quy trình kiểm tra, giám sát chuyên môn", boYTe: "QĐ 2150/QĐ-BYT", benhVien: "QĐ-QL 12/QĐ-BV", link: "#" }
    ];

    const yhctData = [
        { name: "Hào châm", boYTe: "486/QĐ-BYT", benhVien: "69/QĐ-BVYHCT", link: "https://drive.google.com/file/d/1fxSmQiySQcv1dUhPQHvblEzDqtZCxHER/view" },
	{ name: "Điện châm", boYTe: "486/QĐ-BYT", benhVien: "69/QĐ-BVYHCT", link: "https://drive.google.com/file/d/1bbmuJhqAawKMZ762rsPJwk0v-pxo4Wkd/view" },
        { name: "Xoa bóp bấm huyệt", boYTe: "QĐ 3575/QĐ-BYT", benhVien: "QĐ-ĐT 02/QĐ-BV", link: "#" },
        { name: "Thủy châm", boYTe: "QĐ 3576/QĐ-BYT", benhVien: "QĐ-ĐT 03/QĐ-BV", link: "#" },        
        { name: "Cứu ngải", boYTe: "QĐ 3577/QĐ-BYT", benhVien: "QĐ-ĐT 05/QĐ-BV", link: "#" },
        { name: "Ôn châm", boYTe: "QĐ 3577/QĐ-BYT", benhVien: "QĐ-ĐT 06/QĐ-BV", link: "#" },
        { name: "Cấy chỉ", boYTe: "QĐ 3578/QĐ-BYT", benhVien: "QĐ-ĐT 07/QĐ-BV", link: "#" },
        { name: "Giác hơi", boYTe: "QĐ 3578/QĐ-BYT", benhVien: "QĐ-ĐT 08/QĐ-BV", link: "#" },
        { name: "Nhĩ châm", boYTe: "QĐ 3579/QĐ-BYT", benhVien: "QĐ-ĐT 09/QĐ-BV", link: "#" },
        { name: "Xông hơi thuốc y học cổ truyền", boYTe: "QĐ 3579/QĐ-BYT", benhVien: "QĐ-ĐT 10/QĐ-BV", link: "#" },
        { name: "Ngâm chân thuốc", boYTe: "QĐ 3580/QĐ-BYT", benhVien: "QĐ-ĐT 11/QĐ-BV", link: "#" },
        { name: "Chườm thuốc", boYTe: "QĐ 3580/QĐ-BYT", benhVien: "QĐ-ĐT 12/QĐ-BV", link: "#" },
        { name: "Tập dưỡng sinh", boYTe: "QĐ 3581/QĐ-BYT", benhVien: "QĐ-ĐT 13/QĐ-BV", link: "#" }
    ];
    
    const phcnData = [
        { name: "Điện xung trị liệu (TENS)", boYTe: "TT 21/2022/TT-BYT", benhVien: "QĐ-PHCN 01/QĐ-BV", link: "#" },
        { name: "Siêu âm điều trị", boYTe: "TT 21/2022/TT-BYT", benhVien: "QĐ-PHCN 02/QĐ-BV", link: "#" },
        { name: "Hồng ngoại trị liệu", boYTe: "TT 21/2022/TT-BYT", benhVien: "QĐ-PHCN 03/QĐ-BV", link: "#" },
        { name: "Tử ngoại trị liệu", boYTe: "TT 21/2022/TT-BYT", benhVien: "QĐ-PHCN 04/QĐ-BV", link: "#" },
        { name: "Sóng ngắn trị liệu", boYTe: "TT 22/2022/TT-BYT", benhVien: "QĐ-PHCN 05/QĐ-BV", link: "#" },
        { name: "Xoa bóp phục hồi chức năng", boYTe: "TT 22/2022/TT-BYT", benhVien: "QĐ-PHCN 06/QĐ-BV", link: "#" },
        { name: "Vận động trị liệu", boYTe: "TT 23/2022/TT-BYT", benhVien: "QĐ-PHCN 07/QĐ-BV", link: "#" },
        { name: "Điều trị bằng nước khoáng nóng", boYTe: "TT 23/2022/TT-BYT", benhVien: "QĐ-PHCN 08/QĐ-BV", link: "#" },
        { name: "Kéo giãn cột sống", boYTe: "TT 24/2022/TT-BYT", benhVien: "QĐ-PHCN 09/QĐ-BV", link: "#" }
    ];
    
    const dienquangData = [
        { name: "Siêu âm ổ bụng tổng quát", boYTe: "QĐ 4545/QĐ-BYT", benhVien: "QĐ-CĐHA 01/QĐ-BV", link: "#" },
        { name: "Siêu âm sản khoa", boYTe: "QĐ 4545/QĐ-BYT", benhVien: "QĐ-CĐHA 02/QĐ-BV", link: "#" },
        { name: "Siêu âm tim", boYTe: "QĐ 4546/QĐ-BYT", benhVien: "QĐ-CĐHA 03/QĐ-BV", link: "#" },
        { name: "Siêu âm tuyến giáp", boYTe: "QĐ 4546/QĐ-BYT", benhVien: "QĐ-CĐHA 04/QĐ-BV", link: "#" },
        { name: "X-quang phổi thẳng, nghiêng", boYTe: "QĐ 4547/QĐ-BYT", benhVien: "QĐ-CĐHA 05/QĐ-BV", link: "#" },
        { name: "X-quang cột sống cổ, lưng", boYTe: "QĐ 4547/QĐ-BYT", benhVien: "QĐ-CĐHA 06/QĐ-BV", link: "#" },
        { name: "X-quang khớp gối, khớp háng", boYTe: "QĐ 4548/QĐ-BYT", benhVien: "QĐ-CĐHA 07/QĐ-BV", link: "#" },
        { name: "Chụp cắt lớp vi tính (CT)", boYTe: "QĐ 4549/QĐ-BYT", benhVien: "QĐ-CĐHA 08/QĐ-BV", link: "#" }
    ];
    
    const noikhoaData = [
        { name: "Nội soi ống cứng + tiêm xơ búi trĩ", boYTe: "QĐ 2156/QĐ-BYT", benhVien: "QĐ-NK 01/QĐ-BV", link: "#" },
        { name: "Nội soi dạ dày thực quản", boYTe: "QĐ 2157/QĐ-BYT", benhVien: "QĐ-NK 02/QĐ-BV", link: "#" },
        { name: "Nội soi đại tràng", boYTe: "QĐ 2157/QĐ-BYT", benhVien: "QĐ-NK 03/QĐ-BV", link: "#" },
        { name: "Đặt sonde dạ dày", boYTe: "TT 28/2020/TT-BYT", benhVien: "QĐ-NK 04/QĐ-BV", link: "#" },
        { name: "Chọc dò dịch màng bụng", boYTe: "TT 28/2020/TT-BYT", benhVien: "QĐ-NK 05/QĐ-BV", link: "#" },
        { name: "Đặt catheter tĩnh mạch trung tâm", boYTe: "TT 29/2020/TT-BYT", benhVien: "QĐ-NK 06/QĐ-BV", link: "#" },
        { name: "Thông tiểu vô khuẩn", boYTe: "TT 29/2020/TT-BYT", benhVien: "QĐ-NK 07/QĐ-BV", link: "#" }
    ];

    const chamsocData = [
        { name: "Quy trình điều dưỡng chăm sóc YHCT", boYTe: "TT 45/2022/TT-BYT", benhVien: "QĐ-CS 01/QĐ-BV", link: "#" },
        { name: "Quy trình chăm sóc sau tiêm xơ búi trĩ", boYTe: "TT 45/2022/TT-BYT", benhVien: "QĐ-CS 02/QĐ-BV", link: "#" },
        { name: "Quy trình chăm sóc bệnh nhân nặng", boYTe: "TT 47/2023/TT-BYT", benhVien: "QĐ-CS 03/QĐ-BV", link: "#" },
        { name: "Quy trình chăm sóc vết thương", boYTe: "TT 46/2022/TT-BYT", benhVien: "QĐ-CS 04/QĐ-BV", link: "#" },
        { name: "Quy trình phòng ngừa loét ép", boYTe: "TT 46/2022/TT-BYT", benhVien: "QĐ-CS 05/QĐ-BV", link: "#" },
        { name: "Quy trình chăm sóc bệnh nhân hậu phẫu", boYTe: "TT 47/2022/TT-BYT", benhVien: "QĐ-CS 06/QĐ-BV", link: "#" },
        { name: "Quy trình chăm sóc bệnh nhân thở máy", boYTe: "TT 47/2022/TT-BYT", benhVien: "QĐ-CS 07/QĐ-BV", link: "#" },
        { name: "Quy trình dinh dưỡng lâm sàng", boYTe: "TT 48/2022/TT-BYT", benhVien: "QĐ-CS 08/QĐ-BV", link: "#" }
    ];

    const kskData = [
        { name: "Quy trình xử lý chất thải rắn y tế", boYTe: "TT 20/2021/TT-BYT", benhVien: "QĐ-KSK 01/QĐ-BV", link: "#" },
        { name: "Quy trình quản lý tập trung đồ vải", boYTe: "QĐ 3916/QĐ-BYT", benhVien: "QĐ-KSK 02/QĐ-BV", link: "#" },
        { name: "Quy trình xử lý đồ vải", boYTe: "QĐ 3916/QĐ-BYT", benhVien: "QĐ-KSK 03/QĐ-BV", link: "#" },
        { name: "Quy trình vệ sinh tay", boYTe: "QĐ 3916/QĐ-BYT", benhVien: "QĐ-KSK 04/QĐ-BV", link: "#" },
        { name: "Quy trình khử khuẩn - tiệt khuẩn", boYTe: "QĐ 3916/QĐ-BYT", benhVien: "QĐ-KSK 05/QĐ-BV", link: "#" }
    ];

    const phongbenhData = [
        { name: "Quy trình tiêm chủng mở rộng", boYTe: "TT 34/2022/TT-BYT", benhVien: "QĐ-PB 01/QĐ-BV", link: "#" },
        { name: "Quy trình khám sàng lọc trước tiêm", boYTe: "TT 34/2022/TT-BYT", benhVien: "QĐ-PB 02/QĐ-BV", link: "#" },
        { name: "Quy trình quản lý bệnh không lây nhiễm", boYTe: "QĐ 2158/QĐ-BYT", benhVien: "QĐ-PB 03/QĐ-BV", link: "#" },
        { name: "Quy trình tư vấn phòng bệnh", boYTe: "TT 48/2022/TT-BYT", benhVien: "QĐ-PB 04/QĐ-BV", link: "#" },
        { name: "Quy trình giám sát dịch tễ", boYTe: "TT 18/2022/TT-BYT", benhVien: "QĐ-PB 05/QĐ-BV", link: "#" }
    ];

    const duocData = [
        { name: "Quy trình Dược lâm sàng - Kiểm soát thuốc YHCT", boYTe: "TT 52/2017/TT-BYT", benhVien: "QĐ-DC 01/QĐ-BV", link: "#" },
        { name: "Quy trình cấp phát, bảo quản thuốc", boYTe: "TT 52/2017/TT-BYT", benhVien: "QĐ-DC 02/QĐ-BV", link: "#" },
        { name: "Quy trình quản lý thuốc gây nghiện, hướng tâm thần", boYTe: "TT 20/2020/TT-BYT", benhVien: "QĐ-DC 03/QĐ-BV", link: "#" },
        { name: "Quy trình báo cáo ADR (phản ứng có hại của thuốc)", boYTe: "TT 22/2022/TT-BYT", benhVien: "QĐ-DC 04/QĐ-BV", link: "#" },
        { name: "Quy trình sắc thuốc nam, thuốc bắc tập trung", boYTe: "QĐ 1452/QĐ-BYT", benhVien: "QĐ-DC 05/QĐ-BV", link: "#" },
        { name: "Quy trình kiểm kê, nhập xuất tồn kho", boYTe: "TT 52/2017/TT-BYT", benhVien: "QĐ-DC 06/QĐ-BV", link: "#" },
        { name: "Quy trình bào chế thuốc y học cổ truyền", boYTe: "QĐ 1453/QĐ-BYT", benhVien: "QĐ-DC 07/QĐ-BV", link: "#" },
        { name: "Quy trình kiểm nghiệm dược phẩm", boYTe: "QĐ 1454/QĐ-BYT", benhVien: "QĐ-DC 08/QĐ-BV", link: "#" },
        { name: "Quy trình quản lý thuốc hết hạn", boYTe: "TT 53/2017/TT-BYT", benhVien: "QĐ-DC 09/QĐ-BV", link: "#" },
        { name: "Quy trình tư vấn và cung ứng thuốc", boYTe: "TT 54/2017/TT-BYT", benhVien: "QĐ-DC 10/QĐ-BV", link: "#" },
        { name: "Quy trình quản lý dược mỹ phẩm", boYTe: "TT 55/2017/TT-BYT", benhVien: "QĐ-DC 11/QĐ-BV", link: "#" }
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
            tableBody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:30px;">🔍 Không tìm thấy quy trình nào phù hợp</td>\(`;
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