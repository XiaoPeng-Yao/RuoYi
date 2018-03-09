var prefix = "/system/user"


$(document).ready(function(){
	$('body').layout({ west__size: 185 });
	queryUserList();
	queryDeptTreeDaTa();
});

function queryUserList() {
	var columns = [{
            checkbox: true
        },
        {
            field: 'userId',
            title: '用户ID'
        },
        {
            field: 'loginName',
            title: '登录名称'
        },
        {
            field: 'userName',
            title: '用户名称'
        },
        {
            field: 'email',
            title: '邮箱'
        },
        {
            field: 'phonenumber',
            title: '手机'
        },
        {
            field: 'status',
            title: '状态',
            align: 'center',
            formatter: function(value, row, index) {
                if (value == '0') {
                    return '<span class="label label-success">正常</span>';
                } else if (value == '1') {
                    return '<span class="label label-danger">禁用</span>';
                }
            }
        },
        {
            field: 'createTime',
            title: '创建时间'
        },
        {
            title: '操作',
            align: 'center',
            formatter: function(value, row, index) {
            	var actions = [];
            	actions.push('<a class="btn btn-primary btn-sm" href="#" title="编辑" mce_href="#" onclick="edit(\'' + row.userId + '\')"><i class="fa fa-edit"></i></a> ');
            	actions.push('<a class="btn btn-warning btn-sm" href="#" title="删除" onclick="remove(\'' + row.userId + '\')"><i class="fa fa-remove"></i></a>');
            	return actions.join('');
            }
        }];
	var url = prefix + "/list";
    initTable(columns, url);
}

function queryDeptTreeDaTa()
{
	// 树结构初始化加载
	var setting = {view:{selectedMulti:false},data:{key:{title:"title"},simpleData:{enable:true}},
		callback:{onClick:function(event, treeId, treeNode){
			tree.expandNode(treeNode);
			var opt = { query : { deptId : treeNode.id, parentId : treeNode.pId, } };
			$('.bootstrap-table').bootstrapTable('refresh', opt);
		}}
	}, tree, loadTree = function(){
		$.get("/system/dept/treeData", function(data) {
		    tree = $.fn.zTree.init($("#tree"), setting, data); //.expandAll(true);
		    // 展开第一级节点
		    var nodes = tree.getNodesByParam("level", 0);
		    for (var i = 0; i < nodes.length; i++) {
		        tree.expandNode(nodes[i], true, false, false);
		    }
		    // 展开第二级节点
		    nodes = tree.getNodesByParam("level", 1);
		    for (var i = 0; i < nodes.length; i++) {
		        tree.expandNode(nodes[i], true, false, false);
		    }
		}, null, null, "正在加载，请稍后...");
	};loadTree();
	
	$('#btnExpand').click(function() {
		tree.expandAll(true);
	    $(this).hide();
	    $('#btnCollapse').show();
	});
	$('#btnCollapse').click(function() {
		tree.expandAll(false);
	    $(this).hide();
	    $('#btnExpand').show();
	});
	$('#btnRefresh').click(function() {
	    loadTree();
	});
}

/*用户管理-删除*/
function remove(userId) {
	layer.confirm("确定要删除选中用户吗？",{icon: 3, title:'提示'},function(index){
		_ajax(prefix + "/remove/" + userId, "", "post");
    })
}

/*用户管理-修改*/
function edit(deptId) {
    var url = prefix + '/edit/' + deptId;
    layer_show("修改用户", url, '800', '500');
}

/*用户管理-新增*/
function add() {
    var url = prefix + '/add';
    layer_show("新增用户", url, '800', '550');
}

// 批量强退
function batchRemove() {
	var rows = getIdSelections("userId");
	if (rows.length == 0) {
		layer.msg("请选择要删除的数据");
		return;
	}
	layer.confirm("确认要删除选中的" + rows.length + "条数据吗?",{icon: 3, title:'提示'},function(index){
		_ajax(prefix + '/batchRemove', { "ids": rows }, "post");
	});
}
