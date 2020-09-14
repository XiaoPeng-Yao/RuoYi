package com.ruoyi.web.controller.system;

import com.ruoyi.common.config.Global;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.dfm.pojo.MenuInfo;
import com.ruoyi.dfm.pojo.UserInfo;
import com.ruoyi.dfm.service.MenuService;
import com.ruoyi.dfm.service.UserService;
import com.ruoyi.framework.util.ShiroUtils;
import com.ruoyi.system.domain.SysMenu;
import com.ruoyi.system.domain.SysUser;
import com.ruoyi.system.service.ISysConfigService;
import com.ruoyi.system.service.ISysMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

/**
 * 首页 业务处理
 * 
 * @author ruoyi
 */
@Controller
public class SysIndexController extends BaseController
{
//    @Autowired
//    private ISysMenuService menuService;

    @Autowired
    private ISysConfigService configService;

    @Autowired
    MenuService menuService;

    @Autowired
    UserService userService;

    // 系统首页
    @GetMapping("/index")
    public String index(ModelMap mmap)
    {
        // 取身份信息
        UserInfo user = ShiroUtils.getLoginUser();
//        SysUser user = ShiroUtils.getSysUser();
        // 根据用户id取出菜单
//        List<SysMenu> menus = menuService.selectMenusByUser(user);
        //FIXME 临时查询
        List<MenuInfo> menus = menuService.getMenuByGroup(1);

        mmap.put("menus", menus);
        mmap.put("user", user);
        mmap.put("sideTheme", configService.selectConfigByKey("sys.index.sideTheme"));
        mmap.put("skinName", configService.selectConfigByKey("sys.index.skinName"));
        mmap.put("copyrightYear", Global.getCopyrightYear());
//        mmap.put("demoEnabled", Global.isDemoEnabled());
        return "index_dfm";
    }

    // 切换主题
    @GetMapping("/system/switchSkin")
    public String switchSkin(ModelMap mmap)
    {
        return "skin";
    }

    // 系统介绍
    @GetMapping("/system/main")
    public String main(ModelMap mmap)
    {
        mmap.put("version", Global.getVersion());
        //return "main_dfm";
        return "dfm/addProject";
    }
}
