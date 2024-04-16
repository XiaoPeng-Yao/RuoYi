package com.ruoyi.web.controller.account;

import com.ruoyi.common.annotation.Log;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.core.domain.entity.MonitorAddressInfo;
import com.ruoyi.common.core.page.TableDataInfo;
import com.ruoyi.common.enums.BusinessType;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.system.service.IAccountAddressInfoService;
import com.ruoyi.system.service.IMonitorAddressInfoService;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 监听账户入账Controller
 * 
 * @author dorion
 * @date 2024-04-13
 */
@Controller
@RequestMapping("/account/monitor")
public class MonitorAddressInfoController extends BaseController
{
    private String prefix = "account/monitor";

    @Autowired
    private IMonitorAddressInfoService monitorAddressInfoService;
    @Autowired
    private IAccountAddressInfoService accountAddressInfoService;

    @RequiresPermissions("account:monitor:view")
    @GetMapping()
    public String monitor()
    {
        return prefix + "/monitor";
    }

    /**
     * 查询监听账户入账列表
     */
    @RequiresPermissions("account:monitor:list")
    @PostMapping("/list")
    @ResponseBody
    public TableDataInfo list(MonitorAddressInfo monitorAddressInfo)
    {
        startPage();
        List<MonitorAddressInfo> list = monitorAddressInfoService.selectMonitorAddressInfoList(monitorAddressInfo);
        return getDataTable(list);
    }

    /**
     * 导出监听账户入账列表
     */
    @RequiresPermissions("account:monitor:export")
    @Log(title = "监听账户入账", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    @ResponseBody
    public AjaxResult export(MonitorAddressInfo monitorAddressInfo)
    {
        List<MonitorAddressInfo> list = monitorAddressInfoService.selectMonitorAddressInfoList(monitorAddressInfo);
        ExcelUtil<MonitorAddressInfo> util = new ExcelUtil<MonitorAddressInfo>(MonitorAddressInfo.class);
        return util.exportExcel(list, "监听账户入账数据");
    }

    /**
     * 新增监听账户入账
     */
    @GetMapping("/add")
    public String add(ModelMap mmap)
    {
        mmap.put("accountAddressList", accountAddressInfoService.selectAccountAddressInfoAll());
        return prefix + "/add";
    }

    /**
     * 新增保存监听账户入账
     */
    @RequiresPermissions("account:monitor:add")
    @Log(title = "监听账户入账", businessType = BusinessType.INSERT)
    @PostMapping("/add")
    @ResponseBody
    public AjaxResult addSave(MonitorAddressInfo monitorAddressInfo)
    {
        return toAjax(monitorAddressInfoService.insertMonitorAddressInfo(monitorAddressInfo));
    }

    /**
     * 修改监听账户入账
     */
    @RequiresPermissions("account:monitor:edit")
    @GetMapping("/edit/{idMonitorAddress}")
    public String edit(@PathVariable("idMonitorAddress") Long idMonitorAddress, ModelMap mmap)
    {
        MonitorAddressInfo monitorAddressInfo = monitorAddressInfoService.selectMonitorAddressInfoByIdMonitorAddress(idMonitorAddress);
        mmap.put("monitorAddressInfo", monitorAddressInfo);
        mmap.put("accountAddressList", accountAddressInfoService.selectAccountAddressInfoAll());
        return prefix + "/edit";
    }

    /**
     * 修改保存监听账户入账
     */
    @RequiresPermissions("account:monitor:edit")
    @Log(title = "监听账户入账", businessType = BusinessType.UPDATE)
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(MonitorAddressInfo monitorAddressInfo)
    {
        return toAjax(monitorAddressInfoService.updateMonitorAddressInfo(monitorAddressInfo));
    }

    /**
     * 删除监听账户入账
     */
    @RequiresPermissions("account:monitor:remove")
    @Log(title = "监听账户入账", businessType = BusinessType.DELETE)
    @PostMapping( "/remove")
    @ResponseBody
    public AjaxResult remove(String ids)
    {
        return toAjax(monitorAddressInfoService.deleteMonitorAddressInfoByIdMonitorAddresss(ids));
    }
}
