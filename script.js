// ========================================
// --------------بيانات الموقع-------------
// ========================================

// الأخبار
const newsData = [
    { date: '23 فبراير 2026 (5 رمضان)', text: 'عاجل: موعد اعادة أختبار منصة Tofas للمتخلفين والراسبين' },
    //{ date: '10 فبراير 2025', text: 'بدء امتحانات الفصل الدراسي الثاني يوم 20 فبراير' },
    //{ date: '8 فبراير 2025', text: 'إجازة عيد الفطر المبارك من 29 مارس إلى 5 أبريل' },
    //{ date: '5 فبراير 2025', text: 'ندوة توعوية عن أهمية القراءة يوم الخميس القادم' },
    //{ date: '1 فبراير 2025', text: 'تكريم الطلاب المتفوقين في الفصل الدراسي الأول' }
];

// جدول اليوم الدراسي
const classes = {
    "1-1": "1/1",
    "1-2": "1/2",
    "1-3": "1/3",
    "2-1": "2/1",
    "2-2": "2/2",
    "2-3": "2/3",
    "2-4": "2/4",
    "2-5": "2/5",
};


const scheduleData = {
    "sun": {
        "1-1": [
            {period:"اللغة الأجنبية الثانية", time:"الأولى"},
            {period:"علوم متكاملة", time:"الثانية"},
            {period:"فلسفة ومنطق", time:"الثالثة"},
            {period:"اللغة الأنجليزية", time:"الرابعة"},
            {period:"علوم متكاملة", time:"الخامسة"},
            {period:"رياضيات", time:"السادسة"},
            {period:"اللغة العربية", time:"السابعة"}
        ],
        "1-2": [
            {period:"رياضيات", time:"الأولى"},
            {period:"اللغة العربية", time:"الثانية"},
            {period:"اللغة الأنجليزية", time:"الثالثة"},
            {period:"تربية دينية", time:"الرابعة"},
            {period:"فلسفة ومنطق", time:"الخامسة"},
            {period:"تاريخ", time:"السادسة"},
            {period:"تكنولوجيا الزراعة", time:"السابعة"}
        ]
    },


    "mon": {
        "1-1": [
            {period:"علوم متكاملة", time:"الأولى"},
            {period:"علوم متكاملة", time:"الثانية"},
            {period:"اللغة العربية", time:"الثالثة"},
            {period:"علوم متكاملة", time:"الرابعة"},
            {period:"اللغة الأنجليزية", time:"الخامسة"},
            {period:"تاريخ", time:"السادسة"},
            {period:"فلسفة ومنطق", time:"السابعة"}
        ],
        "1-2": [
            {period:"فلسفة ومنطق", time:"الأولى"},
            {period:"اللغة العربية", time:"الثانية"},
            {period:"اللغة الأجنبية الثانية", time:"الثالثة"},
            {period:"علوم متكاملة", time:"الرابعة"},
            {period:"رياضيات", time:"الخامسة"},
            {period:"اللغة الأنجليزية", time:"السادسة"},
            {period:"تاريخ", time:"السابعة"}
        ]
    },


    "tue": {
        "1-1": [
            {period:"اللغة العربية", time:"الأولى"},
            {period:"تاريخ", time:"الثانية"},
            {period:"فلسفة ومنطق", time:"الثالثة"},
            {period:"برمجة وذكاء اصطناعي", time:"الرابعة"},
            {period:"الرياضيات", time:"الخامسة"},
            {period:"تربية دينية", time:"السادسة"},
            {period:"رياضيات", time:"السابعة"}
        ],
        "1-2": [
            {period:"علوم متكاملة", time:"الأولى"},
            {period:"برمجة وذكاء اصطناعي", time:"الثانية"},
            {period:"تاريخ", time:"الثالثة"},
            {period:"اللغة الأنجليزية", time:"الرابعة"},
            {period:"اللغة العربية", time:"الخامسة"},
            {period:"رياضيات", time:"السادسة"},
            {period:"فلسفة ومنطق", time:"السابعة"}
        ]
    },
    "wed": {
        "1-1": [
            {period:"تاريخ", time:"الأولى"},
            {period:"اللغة الأنجليزية", time:"الثانية"},
            {period:"تربية دينية", time:"الثالثة"},
            {period:"برمجة وذكاء اصطناعي", time:"الرابعة"},
            {period:"فلسفة ومنطق", time:"الخامسة"},
            {period:"اللغة العربية", time:"السادسة"},
            {period:"برمجة وذكاء اصطناعي", time:"السابعة"}
        ],
        "1-2": [
            {period:"اللغة الأجنبية الثانية", time:"الأولى"},
            {period:"تاريخ", time:"الثانية"},
            {period:"فلسفة ومنطق", time:"الثالثة"},
            {period:"اللغة العربية", time:"الرابعة"},
            {period:"برمجة وذكاء اصطناعى", time:"الخامسة"},
            {period:"تربية دينية", time:"السادسة"},
            {period:"رياضيات", time:"السابعة"}
        ]
    },
    "thu": {
        "1-1": [
            {period:"اللغة العربية", time:"الأولى"},
            {period:"رياضيات", time:"الثانية"},
            {period:"اللغة الأجنبية الثانية", time:"الثالثة"},
            {period:"برمجة وذكاء اصطناعي", time:"الرابعة"},
            {period:"تاريخ", time:"الخامسة"},
            {period:"اللغة الأنجليزية", time:"السادسة"},
            {period:"فلسفة ومنطق", time:"السابعة"}
        ],
        "1-2": [
            {period:"علوم متكاملة", time:"الأولى"},
            {period:"برمجة وذكاء اصطناعي", time:"الثانية"},
            {period:"اللغة العربية", time:"الثالثة"},
            {period:"علوم متكاملة", time:"الرابعة"},
            {period:"اللغة الأنجليزية", time:"الخامسة"},
            {period:"رياضيات", time:"السادسة"},
            {period:"تكنولوجيا الزراعة", time:"السابعة"}
        ]
    }
};

const days = {
    sun: "الأحد",
    mon: "الاثنين",
    tue: "الثلاثاء",
    wed: "الأربعاء",
    thu: "الخميس"
};

// المراحل الدراسية
const departmentsData = [
    { name:"1/1", link:"classes/class1.html" },
    { name:"1/2", link:"classes/class2.html" },
    { name:"1/3", link:"classes/class3.html" },
    { name:"2/1", link:"classes/class4.html" },
    { name:"2/2", link:"classes/class5.html" },
    { name:"2/3", link:"classes/class6.html" },
    { name:"2/4", link:"classes/class7.html" },
    { name:"2/5", link:"classes/class8.html" }
];

// المعلمون والإدارة
const staffData = [
    { name: 'أ. جمال خلف', role: 'مدير المدرسة', subject: 'الإدارة المدرسية', initial: 'ج' },
    //{ name: 'أ. فولان', role: 'وكيل المدرسة', subject: 'فلسفة وعلم نفس', initial: 'ف' },
    { name: 'أ. علاءالدين محمد', role: 'معلم', subject: 'الرياضيات', initial: 'ع' },
    { name: 'أ. فتحي', role: 'معلم', subject: 'الرياضيات', initial: 'ف' },
    { name: 'أ. أحمد علي', role: 'معلم', subject: 'اللغة العربية', initial: 'أ' },
    { name: 'أ. مؤمن النعمانى', role: 'معلم', subject: 'اللغة العربية', initial: 'م' },
    { name: 'أ. حسين أبو سريع', role: 'معلم', subject: 'اللغة العربية', initial: 'ح' },
    { name: 'أ. أبوالعباس', role: 'معلم', subject: 'اللغة الإنجليزية', initial: 'أ' },
    { name: 'أ. بهجت', role: 'معلم', subject: 'اللغة الإنجليزية', initial: 'ب' },
    { name: 'م. س', role: 'معلمة', subject: 'علوم متكاملة', initial: 'س' }, //سهام
    { name: 'أ. مروان حامد', role: 'معلم', subject: 'فيزياء', initial: 'م' },
    { name: 'أ. عباس', role: 'معلم', subject: 'التاريخ', initial: 'ع' },
    { name: 'أ. الطيب', role: 'معلم', subject: 'فلسفة وعلم نفس', initial: 'ط' },
    { name: 'م. ي', role: 'معلمة', subject: 'فلسفة وعلم نفس', initial: 'ي' }, //ياسمين
    { name: 'أ. غنامي', role: 'معلم', subject: 'تربية اسلامية', initial: 'غ' },
    { name: 'م. س', role: 'معلمة', subject: 'اللغة الفرنسية', initial: 'س' }, //سحر
    { name: 'م. ر', role: 'معلمة', subject: 'برمجة وذكاء اصطناعى', initial: 'ر' }, //رنده
    { name: 'أ. كرم', role: 'معلم', subject: 'تكنولوجيا الزراعة', initial: 'ك' }
];

// ========================================
// --------------بيانات الطلاب--------------
// ========================================
const studentsData = [
    { id: '1', name: 'أبراهيم أحمد ابراهيم حسن', class: '1/1' },
    { id: '2025001', name: 'عبدالعاطي حماد', class: '1/1' },
    { id: '2025002', name: '000000000', class: '1/1' },
    { id: '2025003', name: 'أبرام سامح شحاته', class: '1/2' },
    { id: '2025004', name: 'أبراهيم محمد القضافي', class: '1/2' },
    { id: '2025004', name: 'عمرو عبدالحميد', class: '1/2' },
    { id: '2025004', name: 'عمرو عرفة خليل أمين', class: '1/2' },
    { id: '2025004', name: 'عمرو مجدي', class: '1/2' },
    { id: '2025004', name: 'لؤي حامد مبارك على', class: '1/2' },
    { id: '2025005', name: 'أحمد حاتم', class: '1/3' },
    { id: '2025005', name: 'سراج أحمد صلاح الدين البدري', class: '1/3' },
    { id: '2025005', name: 'يوسف علي', class: '1/3' },
    { id: '2025006', name: 'عبدالله وليد صلاح', class: '2/1' },
    { id: '2025007', name: 'إبراهيم ياسر عبدالله', class: '2/1' },
    { id: '2025008', name: 'حسام سامي فتحي', class: '2/2' },
    { id: '2025009', name: 'مصطفى عادل رمضان', class: '2/2' },
    { id: '2025010', name: 'محمد نبيل جمال', class: '2/3' },
    { id: '2025011', name: 'هشام كمال حسين', class: '2/4' },
    { id: '2025012', name: 'علي رجب عثمان', class: '2/5' }
];

// ========================================
// كود التشغيل - لا تعدّل هذا القسم
// ========================================

// عرض الأخبار
function displayNews() {
    const container = document.getElementById('news-container');
    container.innerHTML = newsData.map((news, index) => `
        <a href=\"news/${index+1}/index.html\" class=\"news-item\" style=\"display:block; text-decoration:none; color:inherit;\">
            <div class=\"news-date\">${news.date}</div>
            <div>${news.text}</div>
        </a>
    `).join('');
}


// عرض المراحل الدراسية
function displayDepartments() {
    const container = document.getElementById('departments-container');
    container.innerHTML = departmentsData.map(c => `
        <a href="${c.link}" class="department-card" style="display:block; text-decoration:none; color:inherit;">
            <h3>${c.name}</h3>
            <p>اضغط لعرض معلومات الفصل</p>
        </a>
    `).join('');
}

// عرض المعلمين
function displayStaff() {
    const container = document.getElementById('staff-container');
    container.innerHTML = staffData.map(staff => `
        <div class="staff-card">
            <div class="staff-photo">${staff.initial}</div>
            <div class="staff-info">
                <div class="staff-name">${staff.name}</div>
                <div class="staff-role">${staff.role}</div>
                <div class="staff-subject">${staff.subject}</div>
            </div>
        </div>
    `).join('');
}

// عرض الطلاب
async function displayStudents() {
    const container = document.getElementById('students-container');
    let html = "";

    try {
        // 1. جلب البيانات من ملف JSON
        const response = await fetch('/students/Studentsinfo.json');

        // التأكد من أن الملف تم جلبة بنجاح
        if (!response.ok) {
            throw new Error('لم يتم العثور على ملف البيانات');
        }

        const studentsData = await response.json();

        // 2. منطق التجميع حسب الفصل (نفس منطقك السابق)
        const groups = {};
        studentsData.forEach(s => {
            if(!groups[s.class]) groups[s.class] = [];
            groups[s.class].push(s);
        });

        // 3. بناء واجهة HTML
        for(let cls in groups){
            html += `<h3>فصل ${cls}</h3>`;
            groups[cls].forEach(st => {
                html += `
                    <div class="student-card">
                        <a href="students/${st.id}.html">${st.name}</a>
                    </div>`;
            });
        }

        // 4. حقن النتائج في الصفحة
        container.innerHTML = html;

    } catch (error) {
        console.error('خطأ في تحميل البيانات:', error);
        container.innerHTML = "<p>حدث خطأ أثناء تحميل كشوف الطلاب. تأكد من وجود الملف في المسار الصحيح.</p>";
    }
}



function loadClasses(){
    const select = document.getElementById("classSelect");
    for(let id in classes){
        select.innerHTML += `<option value="${id}">${classes[id]}</option>`;
    }
    select.onchange = displaySchedule;
}


function loadDays(){
    const d = document.getElementById("daySelect");
    for(let id in days){
        d.innerHTML += `<option value="${id}">${days[id]}</option>`;
    }
    d.onchange = displaySchedule;
}


function loadClasses(){
    const select = document.getElementById("classSelect");
    for(let id in classes){
        select.innerHTML += `<option value="${id}">${classes[id]}</option>`;
    }
    select.onchange = displaySchedule;
}


function displaySchedule(){
    const day = document.getElementById("daySelect").value;
    const cls = document.getElementById("classSelect").value;


    const data = (scheduleData[day] && scheduleData[day][cls]) || [];
    const container = document.getElementById("schedule-container");


    container.innerHTML = data.map(s=>`
        <tr>
        <td>${s.period}</td>
        <td>${s.time}</td>
        </tr>
    `).join('');
}

// التنقل بين الصفحات
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // إزالة active من جميع الروابط والصفحات
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        
        // إضافة active للرابط والصفحة المختارة
        link.classList.add('active');
        const pageId = link.getAttribute('data-page');
        document.getElementById(pageId).classList.add('active');
        
        // التمرير لأعلى
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// تحميل البيانات عند فتح الصفحة
window.addEventListener('DOMContentLoaded', () => {
    displayNews();
    displaySchedule();
    displayDepartments();
    displayStaff();
    displayStudents();
    loadDays();
    loadClasses();
});