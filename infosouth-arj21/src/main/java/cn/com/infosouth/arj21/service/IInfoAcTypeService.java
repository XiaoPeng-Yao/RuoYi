package cn.com.infosouth.arj21.service;

import java.util.List;
import java.util.Map;

import cn.com.infosouth.arj21.domain.InfoAcType;

/**
 * 机型Service接口
 * 
 * @author kxnf
 * @date 2020-03-05
 */
public interface IInfoAcTypeService 
{
    /**
     * 查询机型
     * 
     * @param id 机型ID
     * @return 机型
     */
    public InfoAcType selectInfoAcTypeById(String id);

    /**
     * 查询机型列表
     * 
     * @param infoAcType 机型
     * @return 机型集合
     */
    public List<InfoAcType> selectInfoAcTypeList(InfoAcType infoAcType);

    /**
     * 新增机型
     * 
     * @param infoAcType 机型
     * @return 结果
     */
    public int insertInfoAcType(InfoAcType infoAcType);

    /**
     * 修改机型
     * 
     * @param infoAcType 机型
     * @return 结果
     */
    public int updateInfoAcType(InfoAcType infoAcType);

    /**
     * 批量删除机型
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    public int deleteInfoAcTypeByIds(String ids);

    /**
     * 删除机型信息
     * 
     * @param id 机型ID
     * @return 结果
     */
    public int deleteInfoAcTypeById(String id);

    /**
     *   查找机型列表
     * @return
     */
	public List<Map<String, String>> findacTpyeMapList();

	/**
	 * 查找机型列表
	 * @return
	 */
	public List<String> findacTpyeList();
}
