let studenttable = document.getElementById("studentsTable")

let genraterow = (id, name, email, mobile, address) => {
    return `      <tr class="tcol" id="row${id}">
<td class="tfoot" id="index${id}">${id}</td>
<td class="tfoot" id="name${id}">${name}</td>
<td class="tfoot" id="email${id}">${email}</td>
<td class="tfoot" id="mobile${id}"> ${mobile}</td>
<td class="tfoot" id="address${id}">${address}</td>
<td class="tfoot" id="icon"><i class="fa fa-pencil" aria-hidden="true"  onclick="editbtn(${id})"
        style="margin:20px;width: 30px;font-size:25px;"></i><i class="fa fa-trash" aria-hidden="true"  onclick="deletestudent(${id})"
        style="font-size: 25px;"></i></td>
</tr>`
}
let studentdata = JSON.parse(localStorage.getItem("student"));

let current = (datas) => {
        studenttable.innerHTML = "";
        datas.map((data, id) => {
            let { name, email, mobile, address } = data;
            let tablerow = genraterow(id, name, email, mobile, address);
            studenttable.innerHTML += tablerow
        })
    }

(() => {
    current(studentdata)
})();